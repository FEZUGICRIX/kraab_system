import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBasketCalculations } from '../../hooks/useBasketCalculations';

const BasketMain = () => {
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
  const navigate = useNavigate();

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

    navigate('/basket/checkout');
  };

  return (
    <>
      <section className="basket">
        <div className="basket__container">
          <div className="basket-products">
            <div className="basket__products">
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
                  <div className="basket__product" key={item.id}>
                    <Link to={`/basket/product/${item.id}`}>
                      <div className="basket__product-img">
                        <img
                          src={`${item.image_path}${images[0]}`}
                          alt="Product"
                        />
                      </div>
                    </Link>

                    <div className="basket__product-content">
                      <Link to={`/basket/product/${item.id}`}>
                        <div className="basket__product-title">
                          {item.title}
                        </div>
                      </Link>
                      <div className="basket__product-price">
                        {item.price} <span>€</span>
                      </div>
                      <div className="basket__product-specifications">
                        <div className="basket__product-art">
                          Art. No: {item.id}
                        </div>
                        {basketItem?.packages && (
                          <div className="basket__product-size">
                            packages: {basketItem.packages}
                          </div>
                        )}
                        <div className="basket__product-total">
                          Yhteensä: {totalProductPrice.toFixed(2)}{' '}
                          <span>€</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="basket__product-close"
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
            <div className="basket__total">
              <span>Yhteensä</span>
              <div className="line"></div>
              <div>
                {totalPrice} <span className="euro">€</span>
              </div>
            </div>
          </div>

          <div className="basket__form">
            <div className="basket__discount">
              <span>Lisää ALENNUSKOODI</span>
              <div className="basket__input">
                <input
                  onChange={(e) => setPromoCode(e.target.value)}
                  type="text"
                  id="discount"
                />
                <button className="black-btn" id="add-discount">
                  LISÄÄ
                </button>
              </div>
            </div>

            <div className="basket__hint">
              Ilmainen toimitus alkaen 500€
            </div>

            <div className="basket__order order">
              <div className="order__info">
                <div className="order__value">
                  <span>Tilauksen arvo:</span>
                  <span>
                    {!isNaN(totalPrice) && totalPrice.toFixed(2)}{' '}
                    <span className="euro">€</span>
                  </span>
                </div>
                <div className="order__tax">
                  <span>ALV:</span>
                  <span>
                    {!isNaN(tax) && tax.toFixed(2)}{' '}
                    <span className="euro">€</span>
                  </span>
                </div>
                <div className="order__shipping">
                  <span>Toimitus:</span>
                  <span>
                    {shippingValue} <span className="euro">€</span>
                  </span>
                </div>
                <div className="order__total">
                  <span>Yhteensä:</span>
                  <span>
                    {totalOrderPrice && (
                      <span>{totalOrderPrice / 100} </span>
                    )}
                    <span className="euro">€</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              disabled={totalPrice == 0}
              className="checkout"
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

export default BasketMain;
