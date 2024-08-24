'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useBasketCalculations } from '@/hooks/useBasketCalculations';
import DetailOrder from '@/components/DetailOrder/DetailOrder';
import TimeLine from '@/components/TimeLine/TimeLine';
import { getFormattedDate } from '@/utils/getFormattedDate';
import styles from './page.module.scss';

const BasketCheckoutClient = () => {
  const { totalPrice, shippingValue, totalOrderPrice, tax, basketItems } =
    useBasketCalculations();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zip: '',
  });
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      totalPrice: Number(totalPrice) + shippingValue,
      shippingValue,
      time: getFormattedDate(),
      items: basketItems,
    };

    // Сохранение данных в localStorage
    localStorage.setItem('orderData', JSON.stringify(orderData));

    router.push('/basket/payment');
  };

  return (
    <div>
      <TimeLine step="checkout" />

      <section className={styles.checkout}>
        <div className={styles.checkout__container}>
          <DetailOrder
            subtotal={totalPrice}
            shippingValue={shippingValue}
            totalOrderPrice={totalOrderPrice}
            tax={tax}
          />

          <div className={styles.information}>
            <div className={styles.information__container}>
              <h3 className={styles.information__title}>Laskutusosoite</h3>

              <form
                autoComplete="off"
                onSubmit={handlePayment}
                className={(styles.information__form, styles.form)}
              >
                {[
                  {
                    label: 'Koko nimi',
                    name: 'fullName',
                    type: 'text',
                    placeholder: 'Koko nimi',
                  },
                  {
                    label: 'Sähköpostiosoite',
                    name: 'email',
                    type: 'email',
                    placeholder: 'example@gmail.com',
                  },
                  {
                    label: 'Puhelinnumero',
                    name: 'phone',
                    type: 'tel',
                    placeholder: '+358 11 2245787',
                  },
                  {
                    label: 'Toimitusosoite',
                    name: 'address',
                    type: 'text',
                    placeholder:
                      'Patriot Street Number 666, Ngaklik, Sleman',
                  },
                  {
                    label: 'Osavaltio/Maakunta',
                    name: 'state',
                    type: 'text',
                    placeholder: 'California',
                  },
                  {
                    label: 'Kaupunki',
                    name: 'city',
                    type: 'text',
                    placeholder: 'San Francisco',
                  },
                  {
                    label: 'Postinumero',
                    name: 'zip',
                    type: 'text',
                    placeholder: 'Ex: 94024',
                  },
                ].map(({ label, name, type, placeholder }) => (
                  <div className={styles.form__item} key={name}>
                    <div className={styles.form__subtitle}>{label}</div>
                    <input
                      autoComplete="off"
                      name={name}
                      placeholder={placeholder}
                      type={type}
                      className={styles.form__input}
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}

                <input
                  className={`${styles.information__button} black-btn`}
                  type="submit"
                  value="Tee tilaukseni"
                />
              </form>

              <div className={styles.information__buttons}>
                <Link
                  href="/basket/main"
                  className={`${styles.information__button} white-btn`}
                >
                  Jatka ostoksia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasketCheckoutClient;
