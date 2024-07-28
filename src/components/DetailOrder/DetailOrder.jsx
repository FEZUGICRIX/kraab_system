import React from 'react';

const DetailOrder = ({ subtotal, shippingValue, promoCode }) => {
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__title">Yksityiskohtainen tilaus</div>

        <div className="details__info info">
          <div className="info__item">
            <div className="info__item-title">Yhteensä:</div>
            {subtotal}€
          </div>
          <div className="info__item">
            <div className="info__item-title">Toimituskulut:</div>
            {shippingValue}€
          </div>
          <div className="info__item">
            <div className="info__item-title">Kampanjakoodi:</div>
            {promoCode ? <span>{promoCode}€</span> : '-'}
          </div>
        </div>

        <div className="basket__hint">Ilmainen toimitus alkaen 500€</div>
        
        <div className="details__total">
          <span>Yhteensä:</span>
          <span className="details__total-price">{(Number(subtotal) + shippingValue).toFixed(2)}€</span>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
