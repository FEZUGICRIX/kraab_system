import { useNavigate } from 'react-router-dom';

import { getProducts } from '@api/getProducts';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { useBasketCalculations } from '../../hooks/useBasketCalculations';
import DetailOrder from '../DetailOrder/DetailOrder';
import TimeLine from '../TimeLine/TimeLine';

const BasketPayment = () => {
  const { basketProducts, basketItemsMap, totalPrice, shippingValue } =
    useBasketCalculations();
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
      const response = await getProducts({
        type: 'send_order',
        orderData: orderDataToSend,
      });

      navigate('/basket/payment');
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
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

          <button className="black-btn" onClick={handlePayment}>
            Jatka maksamista
          </button>
        </div>
      </section>
    </div>
  );
};

export default BasketPayment;
