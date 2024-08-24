'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendEmail } from '@/api/sendEmail';
import { useBasketCalculations } from '@/hooks/useBasketCalculations';
import TimeLine from '@/components/TimeLine/TimeLine';
import useBasket from '@/hooks/useBasket';
import styles from './page.module.scss';

const BasketConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const router = useRouter();

  const { basketProducts, basketItemsMap, totalPrice, shippingValue } =
    useBasketCalculations();
  const { setBasketItems } = useBasket();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPaymentId(localStorage.getItem('payment_id'));
      setPaymentMethod(localStorage.getItem('payment_method'));
    }
  }, []);

  useEffect(() => {
    if (!totalPrice || !paymentId) {
      console.log('Total price or payment ID is not available yet.');
      return;
    }

    const orderDataRaw =
      typeof window !== 'undefined'
        ? localStorage.getItem('orderData')
        : null;
    const orderData = orderDataRaw ? JSON.parse(orderDataRaw) : null;

    const fetchRevolutData = async () => {
      try {
        setBasketItems([]);
        const response = await axios.post(
          'https://kraabmod.fi/api/revolut_confirmation.php',
          {
            order_id: paymentId,
          }
        );

        if (
          response.data &&
          response.data.state === 'completed' &&
          !emailSent
        ) {
          if (!orderData) {
            console.error('Нет данных заказа в localStorage');
            return;
          }

          const { fullName, email, phone, address, state, city, zip } =
            orderData;

          const orderDataToSend = {
            fullName,
            email,
            phone,
            address,
            state,
            city,
            zip,
            time: response.data.updated_at,
            shippingValue,
            totalPrice: (totalPrice + shippingValue).toFixed(2),
            items: basketProducts.map((item) => {
              const basketItem = basketItemsMap[item.id];
              return {
                ...item,
                packages: basketItem?.packages || null,
              };
            }),
          };

          if (!emailSent) {
            await sendEmail({
              orderData: orderDataToSend,
            });
            setEmailSent(true);
          }
        }
      } catch (error) {
        console.error('Ошибка при получении данных заказа:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchStripeData = async () => {
      try {
        setBasketItems([]);
        const response = await axios.post(
          'https://kraabmod.fi/api/stripe_confirmation.php',
          {
            session_id: paymentId,
          }
        );

        if (
          response.data &&
          response.data.status === 'complete' &&
          !emailSent
        ) {
          if (!orderData) {
            console.error('Нет данных заказа в localStorage');
            return;
          }

          const { fullName, email, phone, address, state, city, zip } =
            orderData;

          const timestamp = response.data.created;
          const date = new Date(timestamp * 1000);

          const orderDataToSend = {
            fullName,
            email,
            phone,
            address,
            state,
            city,
            zip,
            time: date.toISOString(),
            shippingValue,
            totalPrice: (totalPrice + shippingValue).toFixed(2),
            items: basketProducts.map((item) => {
              const basketItem = basketItemsMap[item.id];
              return {
                ...item,
                packages: basketItem?.packages || null,
              };
            }),
          };

          if (!emailSent) {
            const response = await sendEmail({
              orderData: orderDataToSend,
            });
            setEmailSent(true);
          }
        }
      } catch (error) {
        console.error('Ошибка при получении данных заказа:', error);
      } finally {
        setLoading(false);
      }
    };

    if (paymentId) {
      if (paymentMethod === 'revolut') {
        fetchRevolutData();
      } else if (paymentMethod === 'stripe') {
        fetchStripeData();
      }
    } else {
      setLoading(false);
    }
  }, [totalPrice, paymentId, paymentMethod, emailSent]);

  if (!paymentId) {
    router.push('/');
    return null;
  }

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (typeof window !== 'undefined') {
    localStorage.removeItem('payment_id');
    localStorage.removeItem('basket');
  }

  return (
    <div>
      <TimeLine step="confirmation" />
      <section className={styles.confirmation}>
        <div className={styles.confirmation__container}>
          <div className={(styles.confirmation__result, styles.result)}>
            <div className={styles.result__container}>
              <div className={styles.result__title}>
                Tilaus on vahvistettu
              </div>
              <div className={styles.result__info}>
                Hyviä uutisia! Tilauksesi on hyväksytty. Sähköposti, jossa
                on tiedot, on jo lähetetty sähköpostiisi.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasketConfirmation;
