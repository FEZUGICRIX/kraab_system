'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useBasketCalculations } from '@/hooks/useBasketCalculations';
import styles from './page.module.scss';

const BasketMainClient = () => {
  const {
    setBasketData,
    basketProducts,
    removeLocalStorageItem,
    basketItemsMap,
    totalPrice,
    tax,
    shippingValue,
    totalOrderPrice,
  } = useBasketCalculations();
  const [promoCode, setPromoCode] = useState('');
  const router = useRouter();

  const handleRemoveItem = (id) => {
    removeLocalStorageItem(id);
  };

  const handleCheckout = () => {
    setBasketData((prevData) => ({
      prevData,
      totalPrice,
      shippingValue,
      // promoCode,
    }));
    router.push('/basket/checkout');
  };

  return (
    <>
      <section className={styles.basket}>
        <div className={styles.basket__container}>
          <div className={styles.basketProducts}>
            <div className={styles.basket__products}>
              {basketProducts.map((item) => {
                let images = [];
                try {
                  images = JSON.parse(item.images || '[]'); // Обработка возможных ошибок при JSON.parse
                } catch (error) {
                  console.error('Ошибка при разборе JSON:', error);
                }
                const basketItem = basketItemsMap[item.id];
                const quantity = basketItem?.packages || 1;
                const totalProductPrice =
                  Number(item.price) *
                  quantity *
                  (item.packing_volume || 1);

                return (
                  <div className={styles.basket__product} key={item.id}>
                    <Link href={`/product/${item.id}`}>
                      <div className={styles.basket__productImg}>
                        <img
                          src={`${item.image_path}${images[0]}`}
                          alt="Product"
                        />
                      </div>
                    </Link>

                    <div className={styles.basket__productContent}>
                      <Link href={`/product/${item.id}`}>
                        <div className={styles.basket__productTitle}>
                          {item.title}
                        </div>
                      </Link>
                      <div className={styles.basket__productPrice}>
                        {item.price} <span className={styles.euro}>€</span>
                      </div>
                      <div
                        className={styles.basket__productSpecifications}
                      >
                        <div className={styles.basket__productArt}>
                          Art. No: {item.id}
                        </div>
                        {basketItem?.packages && (
                          <div className={styles.basket__productSize}>
                            packages: {basketItem.packages}
                          </div>
                        )}
                        <div className={styles.basket__productTotal}>
                          Yhteensä: {totalProductPrice.toFixed(2)}{' '}
                          <span className={styles.euro}>€</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className={styles.basket__productClose}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L17.3167 17.3167" stroke="#323334" />
                        <path
                          d="M17.3167 1L0.999983 17.3167"
                          stroke="#323334"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={styles.basket__total}>
              <span>Yhteensä</span>
              <div className={styles.line}></div>
              <div>
                {totalPrice} <span className={styles.euro}>€</span>
              </div>
            </div>
          </div>

          <div className={styles.basket__form}>
            <div className={styles.basket__discount}>
              <span>Lisää ALENNUSKOODI</span>
              <div className={styles.basket__input}>
                <input
                  onChange={(e) => setPromoCode(e.target.value)}
                  type="text"
                  className={styles.basket__discountInput}
                />
                <button
                  className={`black-btn ${styles.basket__addDiscount}`}
                >
                  LISÄÄ
                </button>
              </div>
            </div>

            <div className={styles.basket__hint}>
              Ilmainen toimitus alkaen 500€
            </div>

            <div className={styles.basket__order}>
              <div className={styles.order__info}>
                <div className={styles.order__value}>
                  <span>Tilauksen arvo:</span>
                  <span>
                    {!isNaN(totalPrice) && totalPrice.toFixed(2)}{' '}
                    <span className={styles.euro}>€</span>
                  </span>
                </div>
                <div className={styles.order__tax}>
                  <span>ALV:</span>
                  <span>
                    {!isNaN(tax) && tax.toFixed(2)}{' '}
                    <span className={styles.euro}>€</span>
                  </span>
                </div>
                <div className={styles.order__shipping}>
                  <span>Toimitus:</span>
                  <span>
                    {shippingValue} <span className={styles.euro}>€</span>
                  </span>
                </div>
                <div className={styles.order__total}>
                  <span>Yhteensä:</span>
                  <span>
                    {totalOrderPrice && (
                      <span>{totalOrderPrice / 100} </span>
                    )}
                    <span className={styles.euro}>€</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              disabled={totalPrice === 0}
              className={styles.checkout}
              onClick={handleCheckout}
            >
              Jatka kassalle
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasketMainClient;
