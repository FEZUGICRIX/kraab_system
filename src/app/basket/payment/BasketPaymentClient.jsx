'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { useBasketCalculations } from '@/hooks/useBasketCalculations';
import DetailOrder from '@/components/DetailOrder/DetailOrder';
import TimeLine from '@/components/TimeLine/TimeLine';
import styles from './page.module.scss';

const BasketPaymentClient = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [orderData, setOrderData] = useState(null);

  const {
    basketProducts,
    basketItemsMap,
    totalPrice,
    shippingValue,
    tax,
    totalOrderPrice,
  } = useBasketCalculations();

  // Загружаем данные из localStorage только на клиенте
  useEffect(() => {
    const orderDataRaw = localStorage.getItem('orderData');
    if (orderDataRaw) {
      setOrderData(JSON.parse(orderDataRaw));
    }
  }, []);

  const handlePayment = async () => {
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
      time: getFormattedDate(new Date()),
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

    try {
      if (!selectedMethod) {
        return;
      }

      if (selectedMethod === 'revolut') {
        const response = await axios.post('/api/revolutPayment', {
          amount: totalOrderPrice,
          currency: 'EUR',
          redirect_url: 'https://kraabmod.fi/basket/confirmation',
        });

        localStorage.removeItem('payment_id');
        localStorage.setItem('payment_id', response.data.id);
        localStorage.setItem('payment_method', 'revolut');

        window.location.href = response.data.checkout_url;
      } else if (selectedMethod === 'stripe') {
        const response = await axios.post('/api/stripePayment', {
          amount: totalOrderPrice,
          currency: 'EUR',
          redirect_url: 'https://kraabmod.fi/basket/confirmation',
        });

        localStorage.removeItem('payment_id');
        localStorage.setItem('payment_id', response.data.id);
        localStorage.setItem('payment_method', 'stripe');

        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!orderData) {
    return <div>Загрузка...</div>;
  }

  const { fullName, email, phone, address, state, city, zip, time } =
    orderData;

  return (
    <div>
      <TimeLine step="payment" />

      <section className={styles.payment}>
        <div className={styles.payment__container}>
          <div className={styles.payment__main}>
            <DetailOrder
              subtotal={totalPrice}
              shippingValue={shippingValue}
              totalOrderPrice={totalOrderPrice}
              tax={tax}
            />

            <div className={styles.paymentDetails}>
              <div className={styles.paymentDetailsTitle}>
                Tilauksen yksityiskohdat
              </div>

              <div className={(styles.paymentDetailsData, styles.data)}>
                <div
                  className={styles.data__item + ' ' + styles.data__not}
                >
                  <div className={styles.data__title}>Tuotteet:</div>
                  <div className={styles.data__products}>
                    {basketProducts.map((item) => {
                      const basketItem = basketItemsMap[item.id];
                      const quantity = basketItem?.packages;
                      return (
                        <div
                          className={styles.data__product}
                          key={item.id}
                        >
                          <div className={styles.data__productTitle}>
                            {item.title}
                          </div>
                          {quantity && (
                            <div className={styles.data__productPackages}>
                              packages: {quantity}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.data__item}>
                  <div className={styles.data__title}>Nimi:</div>
                  <div className={styles.data__data}>{fullName}</div>
                </div>
                <div className={styles.data__item}>
                  <div className={styles.data__title}>Puhelin:</div>
                  <div className={styles.data__data}>{phone}</div>
                </div>
                <div className={styles.data__item}>
                  <div className={styles.data__title}>Sähköposti:</div>
                  <div className={styles.data__data}>{email}</div>
                </div>
                <div className={styles.data__item}>
                  <div className={styles.data__title}>Kaupunki:</div>
                  <div className={styles.data__data}>{city}</div>
                </div>
                <div className={styles.data__item}>
                  <div className={styles.data__title}>Toimitusosoite:</div>
                  <div className={styles.data__data}>{address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.method}>
            <div className={styles.method__container}>
              <h3 className={styles.method__title}>Valitse maksutapa:</h3>

              <div className={styles.method__choosing}>
                <label className={styles.method__item}>
                  <input
                    type="radio"
                    id="revolut"
                    name="payment-method"
                    value="revolut"
                    onChange={() => setSelectedMethod('revolut')}
                  />
                  <div className={styles.method__info}>
                    <img
                      className={styles.method__img}
                      src="https://assets.revolut.com/assets/favicons/safari-pinned-tab.svg"
                      alt="payment method image"
                    />
                    <h5 className={styles.method__itemTitle}>Revolut</h5>
                  </div>
                </label>
                <label className={styles.method__item}>
                  <input
                    type="radio"
                    id="stripe"
                    name="payment-method"
                    value="stripe"
                    onChange={() => setSelectedMethod('stripe')}
                  />
                  <div className={styles.method__info}>
                    <img
                      className={styles.method__img}
                      src="https://assets.ctfassets.net/fzn2n1nzq965/01hMKr6nEEGVfOuhsaMIXQ/c424849423b5f036a8892afa09ac38c7/favicon.ico"
                      alt="payment method image"
                    />
                    <h5 className={styles.method__itemTitle}>Stripe</h5>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            disabled={totalPrice === 0}
            className={`${styles.blackBtn} black-btn`}
            onClick={handlePayment}
          >
            Jatka maksamista
          </button>
        </div>
      </section>
    </div>
  );
};

export default BasketPaymentClient;
