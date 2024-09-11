'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBasketCalculations } from '@/hooks/useBasketCalculations';
import TimeLine from '@/components/TimeLine/TimeLine';
import useBasket from '@/hooks/useBasket';
import styles from './page.module.scss';

const BasketConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const [isBasketLoaded, setIsBasketLoaded] = useState(false); // Для отслеживания состояния загрузки корзины
  const router = useRouter();

  const {
    basketProducts,
    basketItemsMap,
    tax,
    totalPrice,
    shippingValue,
    totalOrderPrice,
  } = useBasketCalculations();
  const { setBasketItems } = useBasket();

  useEffect(() => {
    if (
      !basketProducts ||
      totalPrice === undefined ||
      shippingValue === undefined
    ) {
      // Данные корзины еще не загружены
      return;
    }

    setIsBasketLoaded(true); // Корзина загружена
  }, [basketProducts, totalPrice, shippingValue]);

  useEffect(() => {
    if (!isBasketLoaded) return; // Ждём, пока корзина загрузится

    if (typeof window === 'undefined') return;

    const storedPaymentId = localStorage.getItem('payment_id');
    const storedPaymentMethod = localStorage.getItem('payment_method');

    if (!storedPaymentId) {
      router.push('/');
      return;
    }

    const orderDataRaw = localStorage.getItem('orderData');
    const orderData = orderDataRaw ? JSON.parse(orderDataRaw) : null;

    let isEmailSent = false; // Локальный флаг для отслеживания

    const fetchRevolutData = async () => {
      try {
        setBasketItems([]);
        const response = await axios.post(
          '/api/revolutCheckPaymentStatus',
          {
            order_id: storedPaymentId,
          }
        );

        if (
          response.data &&
          response.data.state === 'completed' &&
          !isEmailSent
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
            tax,
            totalPrice: (totalOrderPrice / 100).toFixed(2),
            items: basketProducts.map((item) => {
              const basketItem = basketItemsMap[item.id];
              return {
                ...item,
                packages: basketItem?.packages || null,
              };
            }),
          };

          await axios.post('/api/sendEmail', orderDataToSend);
          isEmailSent = true; // Устанавливаем флаг после отправки email
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
          '/api/stripeCheckPaymentStatus',
          {
            session_id: storedPaymentId,
          }
        );

        if (response.data.status !== 'complete') {
          router.push('/');
          return;
        }

        if (response.data && !isEmailSent) {
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
            tax,
            totalPrice: (totalOrderPrice / 100).toFixed(2),
            items: basketProducts.map((item) => {
              const basketItem = basketItemsMap[item.id];
              return {
                ...item,
                packages: basketItem?.packages || null,
              };
            }),
          };

          await axios.post('/api/sendEmail', orderDataToSend);
          isEmailSent = true; // Устанавливаем флаг
        }
      } catch (error) {
        console.error('Ошибка при получении данных заказа:', error);
      } finally {
        setLoading(false);
      }
    };

    if (storedPaymentMethod === 'revolut') {
      fetchRevolutData();
    } else if (storedPaymentMethod === 'stripe') {
      fetchStripeData();
    } else {
      setLoading(false);
    }
  }, [isBasketLoaded]); // Выполняем только после загрузки данных корзины

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
