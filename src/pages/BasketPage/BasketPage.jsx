import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import useBasket from '../../hooks/useBasket';

const BasketPage = () => {
  const { basketItems, removeLocalStorageItem } = useBasket();
  const [basketProducts, setBasketProducts] = useState([]);

  // Получение идентификаторов товаров из корзины
  const rawProducts = basketItems.map((item) => item.id);

  // Функция для получения продуктов из API
  useEffect(() => {
    const fetchBasketProducts = async () => {
      try {
        const products = await Promise.all(
          rawProducts.map((id) => getProducts({ type: 'get_product', id }))
        );
        const filteredProducts = products.filter(Boolean);
        setBasketProducts(filteredProducts);
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
      }
    };

    fetchBasketProducts();
  }, [basketItems]);

  // Создание карты продуктов для быстрого доступа
  const basketItemsMap = basketItems.reduce((map, item) => {
    map[item.id] = item;
    return map;
  }, {});

  // Расчет общей стоимости
  const calculateTotalPrice = () => {
    return basketProducts.reduce((total, item) => {
      const basketItem = basketItemsMap[item.id];
      const quantity = basketItem?.packages || 1;
      const packingVolume = item.packing_volume || 1; // Убедитесь, что packing_volume не undefined
      return total + Number(item.price) * quantity * packingVolume;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const shippingValue = totalPrice >= 500 ? 0 : 19.9;

  const handleRemoveItem = (id) => {
    removeLocalStorageItem(id);
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
                            src={`${basePath[item.catalog]}${
                              images[0] || 'default.jpg'
                            }`}
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

              <div className="basket__hint">
                Ilmainen toimitus alkaen 500€
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
                      {shippingValue} <span className="euro">€</span>
                    </span>
                  </div>
                  <div className="order__total">
                    <span>Yhteensä:</span>
                    <span>
                      {totalPrice.toFixed(2)}{' '}
                      <span className="euro">€</span>
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
    </>
  );
};

export default BasketPage;
