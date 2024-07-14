import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { PRODUCTS } from '@PRODUCTS';
import Breadcrumbs from '@Breadcrumbs';

import AlsoLike from '../../components/AlsoLike/AlsoLike';
import useBasket from '../../hooks/useBasket';

const ProductPage = ({ source }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const root = source[source.length - 1];

  const allProducts = Object.values(PRODUCTS).flat();
  const product = allProducts.find((item) => item.id === productId);
  const { title, img, price } = product;

  const { basketItems, setLocalStorageItems, removeLocalStorageItem } =
    useBasket();
  const [inBusket, setInBusket] = useState(
    basketItems.some((item) => item === id)
  );

  const handleAddToBasket = () => {
    setLocalStorageItems(id);
    setInBusket(true);
  };

  const handleRemoveFromBasket = () => {
    removeLocalStorageItem(id);
    setInBusket(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Breadcrumbs pageTitle="Product" previousPages={source} />

      <section className="product-info">
        <div className="container">
          <div className="product-info__container">
            <div className="product-info__images images">
              <div className="images__top">
                <img src={img} className="images__left" alt="product" />
                <img src={img} className="images__right" alt="product" />
              </div>
              <div className="images__bottom">
                <img src={img} alt="product" />
              </div>
            </div>

            <div className="product-info__content content">
              <div className="content__title">{title}</div>
              <div className="content__price">{price}€</div>

              <div className="content__variant">
                <span>Light khaki green/white checks</span>
                <img src={img} alt="product" />
              </div>

              <div className="content__available">
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C3.35357 0 0 3.2152 0 7.19055C0 11.4741 4.73571 17.3806 6.68571 19.6302C7.11429 20.1233 7.89643 20.1233 8.325 19.6302C10.2643 17.3806 15 11.4741 15 7.19055C15 3.2152 11.6464 0 7.5 0ZM7.5 9.7586C6.7896 9.7586 6.10829 9.48804 5.60596 9.00644C5.10363 8.52483 4.82143 7.87164 4.82143 7.19055C4.82143 6.50946 5.10363 5.85626 5.60596 5.37466C6.10829 4.89306 6.7896 4.6225 7.5 4.6225C8.2104 4.6225 8.89171 4.89306 9.39404 5.37466C9.89637 5.85626 10.1786 6.50946 10.1786 7.19055C10.1786 7.87164 9.89637 8.52483 9.39404 9.00644C8.89171 9.48804 8.2104 9.7586 7.5 9.7586Z"
                    fill="black"
                    fillOpacity="0.5"
                  />
                </svg>

                <span>Not available in stores</span>
              </div>

              <div className="content__buttons">
                <select
                  defaultValue=""
                  name="size"
                  id="size"
                  className="content__size"
                >
                  <option value="" disabled>
                    Select Size
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>

                {inBusket ? (
                  <button
                    onClick={handleRemoveFromBasket}
                    className="bag-btn black-btn"
                  >
                    Remove from shopping bag
                  </button>
                ) : (
                  <button
                    onClick={handleAddToBasket}
                    className="bag-btn black-btn"
                  >
                    Add to shopping bag
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="conscious">
        <div className="container">
          <div className="conscious__container">
            <div className="conscious__title">Conscious</div>

            <div className="conscious__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et
            </div>

            <div className="conscious__info">
              <div className="conscious__composition">
                Composition — <span>Cotton 50%, Lyocell 50%</span>
              </div>

              <div className="conscious__art">
                Art. No. — <span>{id}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlsoLike root={root} />
    </>
  );
};

export default ProductPage;
