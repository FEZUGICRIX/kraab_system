import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useBasketCalculations } from '../../hooks/useBasketCalculations';
import DetailOrder from '../DetailOrder/DetailOrder';
import TimeLine from '../TimeLine/TimeLine';
import { getFormattedDate } from '../../utils/getFormattedDate';

const BasketCheckout = () => {
  const { totalPrice, shippingValue, totalOrderPrice, basketItems } =
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
  const navigate = useNavigate();

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

    navigate('/basket/payment');
  };

  return (
    <div>
      <TimeLine step="checkout" />

      <section className="checkout">
        <div className="checkout__container">
          <DetailOrder
            subtotal={totalPrice}
            shippingValue={shippingValue}
            totalOrderPrice={totalOrderPrice}
          />

          <div className="checkout__information information">
            <div className="information__container">
              <h3 className="information__title">Laskutusosoite</h3>

              <form
                autoComplete="off"
                onSubmit={handlePayment}
                className="information__form form"
              >
                <div className="form__item">
                  <div className="form__subtitle">Koko nimi</div>
                  <input
                    autoComplete="off"
                    name="fullName"
                    placeholder="Koko nimi"
                    type="text"
                    className="form__input"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Sähköpostiosoite</div>
                  <input
                    name="email"
                    placeholder="example@gmail.com"
                    type="email"
                    className="form__input"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Puhelinnumero</div>
                  <input
                    name="phone"
                    placeholder="+358 11 2245787"
                    type="tel"
                    required
                    className="form__input"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Toimitusosoite</div>
                  <input
                    name="address"
                    placeholder="Patriot Street Number 666, Ngaklik, Sleman"
                    type="text"
                    className="form__input"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Osavaltio/Maakunta</div>
                  <input
                    name="state"
                    placeholder="California"
                    type="text"
                    required
                    className="form__input"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Kaupunki</div>
                  <input
                    name="city"
                    placeholder="San Francisco"
                    type="text"
                    required
                    className="form__input"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form__item">
                  <div className="form__subtitle">Postinumero</div>
                  <input
                    name="zip"
                    placeholder="Ex: 94024"
                    type="text"
                    required
                    className="form__input"
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>

                <input
                  className="information__button black-btn"
                  type="submit"
                  value="Tee tilaukseni"
                />
              </form>

              <div className="information__buttons">
                <Link
                  to="/basket/main"
                  className="information__button white-btn"
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

export default BasketCheckout;
