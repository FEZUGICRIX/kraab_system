import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../../api/sendEmail';
import { useBasketCalculations } from '../../hooks/useBasketCalculations';
import TimeLine from '../TimeLine/TimeLine';
import useBasket from '../../hooks/useBasket';

const BasketConfirmation = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false); // Флаг для отслеживания отправки письма
  const paymentId = localStorage.getItem('payment_id');
  const navigate = useNavigate();

  const { basketProducts, basketItemsMap, totalPrice, shippingValue } =
    useBasketCalculations();
  const { setBasketItems } = useBasket();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBasketItems([]);
        const response = await axios.post(
          'https://kraabmod.fi/api/revolut_confirmation.php',
          {
            order_id: paymentId,
          }
        );
        setOrderData(response.data);

        if (
          response.data &&
          response.data.state === 'completed' &&
          !emailSent
        ) {
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

          // Проверяем, что флаг установлен до отправки
          if (!emailSent) {
            await sendEmail({
              type: 'send_order',
              orderData: orderDataToSend,
            });

            // Устанавливаем флаг, что письмо отправлено
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
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  if (!paymentId) {
    navigate('/');
    return null;
  }

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  localStorage.removeItem('payment_id');
  localStorage.removeItem('basket');

  return (
    <div>
      <TimeLine step="confirmation" />
      <section className="confirmation">
        <div className="confirmation__container">
          <div className="confirmation__result result">
            <div className="result__container">
              <div className="result__title">Tilaus on vahvistettu</div>
              <div className="result__info">
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
