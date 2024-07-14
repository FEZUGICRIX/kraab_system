import Breadcrumbs from '@Breadcrumbs';
import useBasket from '../../hooks/useBasket';
import { PRODUCTS } from '@PRODUCTS';
import AlsoLike from '../../components/AlsoLike/AlsoLike';

const BasketPage = () => {
  const { basketItems, removeLocalStorageItem, totalPrice } = useBasket();

  const allProducts = Object.values(PRODUCTS).flat();
  const basketProductItems = allProducts.filter((item) =>
    basketItems.includes(String(item.id))
  );

  const handleRemoveItem = (id) => {
    removeLocalStorageItem(String(id));
  };

  return (
    <>
      <Breadcrumbs pageTitle="shopping bag" />

      <section className="basket">
        <div className="container">
          <h3 className="basket__title">Shopping bag</h3>

          <div className="basket__container">
            <div className="basket-products">
              <div className="basket__products">
                {basketProductItems.map((item) => (
                  <div className="basket__product" key={item.id}>
                    <div className="basket__product-img">
                      <img src={item.img} alt="product" />
                    </div>

                    <div className="basket__product-content">
                      <div className="basket__product-title">
                        {item.title}
                      </div>
                      <div className="basket__product-price">
                        {item.price} <span>€</span>
                      </div>
                      <div className="basket__product-specifications">
                        <div className="basket__product-art">
                          Art. No.: {item.id}
                        </div>

                        <div className="basket__product-size">
                          Size: 21*45
                        </div>

                        <div className="basket__product-color">
                          Color: white
                        </div>

                        <div className="basket__product-total">
                          Total: {item.price}
                        </div>
                      </div>

                      <div className="basket__product-amount">
                        <select name="amount" id="amount">
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
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
                ))}
              </div>
              <div className="basket__total">
                <span>Total</span>
                <div className="line"></div>
                <div>
                  {totalPrice} <span className="euro">€</span>
                </div>
              </div>
            </div>

            <div className="basket__form">
              <div className="basket__discount">
                <span>Add A DISCOUNT CODE</span>
                <div className="basket__input">
                  <input type="text" id="discount" />
                  <button className="black-btn" id="add-discount">
                    ADD
                  </button>
                </div>
              </div>

              <div className="basket__login">
                <span>Log in to use your member offers.</span>
                <button id="login">LOG IN</button>
              </div>

              <div className="basket__order order">
                <div className="order__info">
                  <div className="order__value">
                    <span>Order value:</span>
                    <span>
                      {totalPrice} <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__shipping">
                    <span>Shipping:</span>
                    <span>
                      0 <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__total">
                    <span>Total:</span>
                    <span>
                      {totalPrice} <span className="euro">€</span>
                    </span>
                  </div>
                </div>
              </div>

              <button className="black-btn checkout">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      <AlsoLike root="basket" />
    </>
  );
};

export default BasketPage;
