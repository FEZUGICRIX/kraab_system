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
              <div className="order__column-info">Total</div>
              <div className="order__column-title">{price}£</div>
            </div>

            <div className="order__column">
              <div className="order__column-info">Payment</div>
              <div className="order__column-title">{payment}</div>
            </div>
          </div>

          <div className="order__deliver">
            {delivered ? 'Delivered' : 'In delivery'}
          </div>
        </div>

        <div className="order__management">
          <button className="order__button">Cancel order</button>
          <button className="order__button">Order tracking</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
