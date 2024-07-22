const Order = ({ number, price, payment, delivered }) => {
  return (
    <div className="order">
      <div className="order__container">
        <div
          className={`order__main ${
            delivered ? 'delivered' : 'not-delivered'
          }`}
        >
          <div className="order__info">
            <div className="order__column">
              <div className="order__column-title">№{number}</div>
              <div className="order__column-info">11.06.2024</div>
            </div>

            <div className="order__column">
              <div className="order__column-info">Yhteensä</div>
              <div className="order__column-title">{price}£</div>
            </div>

            <div className="order__column">
              <div className="order__column-info">Maksu</div>
              <div className="order__column-title">{payment}</div>
            </div>
          </div>

          <div className="order__deliver">
            {delivered ? 'Toimitettu' : 'Toimituksessa'}
          </div>
        </div>

        <div className="order__management">
          <button className="order__button">Peruuta tilaus</button>
          <button className="order__button">Tilauksen seuranta</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
