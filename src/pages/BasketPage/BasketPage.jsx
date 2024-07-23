import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import useBasket from '../../hooks/useBasket';
import AlsoLike from '@components/AlsoLike/AlsoLike';

const BasketPage = () => {
  const { basketItems, removeLocalStorageItem } = useBasket();
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    const fetchBasketProducts = async () => {
      try {
        const promises = basketItems.map(async (id) => {
          const product = await getProducts({ type: 'get_product', id });
          return product;
        });

        const products = await Promise.all(promises);
        const filteredProducts = products.filter(
          (product) => product !== null
        );
        setBasketProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBasketProducts();
  }, [basketItems]);

  const totalPrice = basketProducts.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleRemoveItem = (id) => {
    removeLocalStorageItem(String(id));
  };

  const orderValue = totalPrice * 0.86;
  const tax = totalPrice * 0.24;

  return (
    <>
      <Breadcrumbs pageTitle="ostoskassi" />

      <section className="basket">
        <div className="container">
          <h3 className="basket__title">Ostoskassi</h3>

          <div className="basket__container">
            <div className="basket-products">
              <div className="basket__products">
                {basketProducts.map((item) => {
                  const basePath = {
                    moduleo_products: '/img/pages/moduleo/',
                    denkirs_products: '/img/pages/denkirs/',
                    kraabmod_products: '/img/pages/kraabmod/',
                    jm_products: '/img/pages/jm/',
                    favorite_products: '/img/pages/favorites/',
                    alsoLike_products: '/img/pages/productPage/',
                  };
                  const rawImages = item.images;
                  const images = JSON.parse(rawImages);

                  return (
                    <div className="basket__product" key={item.id}>
                      <div className="basket__product-img">
                        <img
                          src={`${basePath[item.catalog]}${images[0]}`}
                          alt="Product"
                        />
                      </div>
                      {console.log()}

                      <div className="basket__product-content">
                        <div className="basket__product-title">
                          {item.title}
                        </div>
                        <div className="basket__product-price">
                          {item.price} <span>€</span>
                        </div>
                        <div className="basket__product-specifications">
                          <div className="basket__product-art">
                            Art. No: {item.id}
                          </div>

                          <div className="basket__product-size">
                            Koko: 21*45
                          </div>

                          <div className="basket__product-color">
                            Väri: White
                          </div>

                          <div className="basket__product-total">
                            Yhteensä: {item.price}
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
                          <path
                            d="M1 1L17.3167 17.3167"
                            stroke="#323334"
                          />
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
                  {totalPrice.toFixed(2)} <span className="euro">€</span>
                </div>
              </div>
            </div>

            <div className="basket__form">
              <div className="basket__discount">
                <span>Lisää ALENNUSKOODI</span>
                <div className="basket__input">
                  <input type="text" id="discount" />
                  <button className="black-btn" id="add-discount">
                    LISÄÄ
                  </button>
                </div>
              </div>

              <div className="basket__login">
                <span>Kirjaudu sisään käyttääksesi jäsentarjouksiasi</span>
                <button id="login">KIRJAUDU SISÄÄN</button>
              </div>

              <div className="basket__order order">
                <div className="order__info">
                  <div className="order__value">
                    <span>Tilauksen arvo:</span>
                    <span>
                      {orderValue.toFixed(2)}{' '}
                      <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__tax">
                    <span>ALV:</span>
                    <span>
                      {tax.toFixed(2)} <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__shipping">
                    <span>Toimitus:</span>
                    <span>
                      0 <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__total">
                    <span>Yhteensä:</span>
                    <span>
                      {totalPrice} <span className="euro">€</span>
                    </span>
                  </div>
                </div>
              </div>

              <button className="black-btn checkout">
                Jatka kassalle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <AlsoLike root="basket" /> */}
    </>
  );
};

export default BasketPage;
