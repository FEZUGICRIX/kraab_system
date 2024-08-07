import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { revolutPayment } from '../../api/revolutPayment';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { useBasketCalculations } from '../../hooks/useBasketCalculations';
import DetailOrder from '../DetailOrder/DetailOrder';
import TimeLine from '../TimeLine/TimeLine';

const BasketPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const {
    basketProducts,
    basketItemsMap,
    totalPrice,
    shippingValue,
    totalOrderPrice,
  } = useBasketCalculations();

  const navigate = useNavigate();

  const handlePayment = async () => {
    const orderDataRaw = localStorage.getItem('orderData');
    const orderData = JSON.parse(orderDataRaw);

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
        await revolutPayment({
          amount: totalOrderPrice,
          currency: 'EUR',
          redirect_url: 'https://kraabmod.fi/basket/confirmation',
        });
      } else if (selectedMethod === 'stripe') {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const orderDataRaw = localStorage.getItem('orderData');
  const orderData = JSON.parse(orderDataRaw);
  const { fullName, email, phone, address, state, city, zip, time } =
    orderData;

  return (
    <div>
      <TimeLine step="payment" />

      <section className="payment">
        <div className="payment__container">
          <div className="payment__main">
            <DetailOrder
              subtotal={totalPrice}
              shippingValue={shippingValue}
              totalOrderPrice={totalOrderPrice}
            />

            <div className="payment__details">
              <div className="payment__details-title">
                Tilauksen yksityiskohdat
              </div>

              <div className="payment__details-data data">
                <div className="data__item data__not">
                  <div className="data__title">Tuotteet:</div>
                  <div className="data__date data__products">
                    {basketProducts.map((item) => {
                      const basketItem = basketItemsMap[item.id];
                      const quantity = basketItem?.packages;
                      return (
                        <div className="data__product" key={item.id}>
                          <div className="data__product-title data__data">
                            {item.title}
                          </div>
                          {quantity && (
                            <div className="data__proctuct-packages">
                              packages: {quantity}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="data__item">
                  <div className="data__title">Nimi:</div>
                  <div className="data__data">{fullName}</div>
                </div>
                <div className="data__item">
                  <div className="data__title">Puhelin:</div>
                  <div className="data__data">{phone}</div>
                </div>
                <div className="data__item">
                  <div className="data__title">Sähköposti:</div>
                  <div className="data__data">{email}</div>
                </div>
                <div className="data__item">
                  <div className="data__title">Kaupunki:</div>
                  <div className="data__data">{city}</div>
                </div>
                <div className="data__item">
                  <div className="data__title">Toimitusosoite:</div>
                  <div className="data__data">{address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="method">
            <div className="method__container">
              <h3 className="method__title">Valitse maksutapa:</h3>

              <div className="method__choosing">
                <label className="method__item">
                  <input
                    type="radio"
                    id="revolut"
                    name="payment-method"
                    value="revolut"
                    onChange={() => setSelectedMethod('revolut')}
                  />
                  <div className="method__info">
                    <img
                      className="method__img"
                      src="https://assets.revolut.com/assets/favicons/safari-pinned-tab.svg"
                      alt="payment method image"
                    />
                    <h5 className="method__item-title">Revolut</h5>
                  </div>
                </label>
                <label className="method__item">
                  <input
                    type="radio"
                    id="stripe"
                    name="payment-method"
                    value="stripe"
                    onChange={() => setSelectedMethod('stripe')}
                  />
                  <div className="method__info">
                    <img
                      className="method__img"
                      src="https://assets.ctfassets.net/fzn2n1nzq965/01hMKr6nEEGVfOuhsaMIXQ/c424849423b5f036a8892afa09ac38c7/favicon.ico"
                      alt="payment method image"
                    />
                    <h5 className="method__item-title">Stripe</h5>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            disabled={totalPrice == 0}
            className="black-btn"
            onClick={handlePayment}
          >
            Jatka maksamista
          </button>
        </div>
      </section>
    </div>
  );
};

export default BasketPayment;
