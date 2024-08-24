import styles from './DetailOrder.module.scss';

const DetailOrder = ({
  subtotal,
  shippingValue,
  totalOrderPrice,
  promoCode,
  tax,
}) => {
  return (
    <div className={styles.details}>
      <div className={styles.details__container}>
        <div className={styles.details__title}>
          Yksityiskohtainen tilaus
        </div>

        <div className={`${styles.details__info} ${styles.info}`}>
          <div className={styles.info__item}>
            <div className={styles.info__itemTitle}>Yhteensä:</div>
            {subtotal}€
          </div>
          <div className={styles.info__item}>
            <div className={styles.info__itemTitle}>Toimituskulut:</div>
            {shippingValue}€
          </div>
          <div className={styles.info__item}>
            <div className={styles.info__itemTitle}>ALV: </div>
            {tax}€
          </div>
          <div className={styles.info__item}>
            <div className={styles.info__itemTitle}>Kampanjakoodi:</div>
            {promoCode ? <span>{promoCode}€</span> : '-'}
          </div>
        </div>

        <div className={styles.basket__hint}>
          Ilmainen toimitus alkaen 500€
        </div>

        <div className={styles.details__total}>
          <span>Yhteensä:</span>
          <span className={styles.details__totalPrice}>
            {totalOrderPrice && <span>{totalOrderPrice / 100} </span>}€
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
