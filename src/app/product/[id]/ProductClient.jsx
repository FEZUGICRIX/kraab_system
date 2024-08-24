'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProducts } from '@/api/getProducts';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Snackbar from '@/components/Snackbar/Snackbar';
import useBasket from '@/hooks/useBasket';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import styles from './page.module.scss';

const ProductPage = ({ source }) => {
  const [product, setProduct] = useState(null);
  const [packages, setPackages] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({ type: 'get_product', id });

        if (!data) {
          notFound(); // перенаправить на 404, если продукт не найден
        } else {
          setProduct(data);
        }
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const { basketItems, setLocalStorageItems, removeLocalStorageItem } =
    useBasket();
  const [inBasket, setInBasket] = useState(
    basketItems.some((item) => item.id === id)
  );

  const handleAddToBasket = () => {
    if (packing_volume) {
      setLocalStorageItems({ id, packages });
    } else {
      setLocalStorageItems({ id });
    }
    setInBasket(true);
    setSnackbarMessage('Tuote on lisätty ostoskoriin');
  };

  const handleRemoveFromBasket = () => {
    removeLocalStorageItem(id);
    setInBasket(false);
    setSnackbarMessage('Tuote on poistettu ostoskorista');
  };

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  const {
    sku,
    title,
    images,
    image_path,
    material,
    price,
    length,
    dimmable,
    color_of_light,
    description,
    height,
    angle_of_dispersion,
    quantity,
    packing_volume,
  } = product;

  const imagesParse = JSON.parse(images);

  const handlePackagesChange = (event) => {
    const value = parseInt(event.target.value);
    setPackages(value);
  };

  const totalPrice =
    !isNaN(packages) && packages > 0
      ? (packages * price * packing_volume).toFixed(2)
      : (price * packing_volume).toFixed(2);

  return (
    <>
      <Breadcrumbs pageTitle="TUOTTEET" previousPages={source} />

      <section className={styles.productInfo}>
        <div className="container">
          <div className={styles.productInfo__container}>
            <div className={(styles.productInfo__images, styles.images)}>
              <Swiper
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.mySwiper}
              >
                {imagesParse.map((img) => (
                  <SwiperSlide key={img}>
                    <div className={styles.imageContainer}>
                      <img
                        className={styles.images__item}
                        src={`${image_path}${img}`}
                        alt="product images"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={(styles.productInfo__content, styles.content)}>
              <div className={styles.content__title}>{title}</div>
              <div className={styles.content__price}>{price}€</div>

              <div className={styles.content__product}>
                <div
                  className={
                    (styles.content__specifications, styles.specifications)
                  }
                >
                  <div className={styles.specifications__block}>
                    {sku && (
                      <span className={styles.specifications__title}>
                        SKU:
                        <span className={styles.specifications__item}>
                          {' '}
                          {sku}
                        </span>
                      </span>
                    )}
                    {material && (
                      <span className={styles.specifications__title}>
                        Materiaali:{' '}
                        <span className={styles.specifications__item}>
                          {material}
                        </span>
                      </span>
                    )}
                    {length && (
                      <span className={styles.specifications__title}>
                        Pituus:{' '}
                        <span className={styles.specifications__item}>
                          {length}
                        </span>
                      </span>
                    )}
                    {height && (
                      <span className={styles.specifications__title}>
                        Korkeus:{' '}
                        <span className={styles.specifications__item}>
                          {height}
                        </span>
                      </span>
                    )}
                    {dimmable && (
                      <span className={styles.specifications__title}>
                        Himmennettävä:{' '}
                        <span className={styles.specifications__item}>
                          Kyllä
                        </span>
                      </span>
                    )}
                    {angle_of_dispersion && (
                      <span className={styles.specifications__title}>
                        Valon hajontakulma:{' '}
                        <span className={styles.specifications__item}>
                          {angle_of_dispersion}
                        </span>
                      </span>
                    )}
                    {color_of_light && (
                      <span className={styles.specifications__title}>
                        Hehkuväri:{' '}
                        <span className={styles.specifications__item}>
                          {color_of_light}
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                {description && (
                  <div className={styles.content__description}>
                    {description}
                    {title === '3d-Konsepti Olohuoneeseen' && (
                      <div className={styles.specialDescription}>
                        <div>
                          <span>Sähköisesti:</span>{' '}
                          <a href="mailto:Tanjachernova.fi@gmail.com">
                            Tanjachernova.fi@gmail.com
                          </a>
                        </div>
                        <div>
                          <span>Puhelinnumero:</span>{' '}
                          <a href="tel:+358408601517">+358408601517</a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.content__available}>
                {quantity === 0 && (
                  <>
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
                    <span>Ei saatavilla myymälöissä</span>
                  </>
                )}
                {quantity >= 1 && (
                  <div className={styles.availableAmount}>
                    <span>Saatavilla:</span>
                    <span>{quantity}</span>
                  </div>
                )}
              </div>

              <div className={styles.content__buttons}>
                {packing_volume && (
                  <div className={styles.calculator}>
                    <div className={styles.calculator__container}>
                      <h3 className={styles.calculator__title}>
                        Laske tuotteen hinta
                      </h3>

                      <div className={styles.calculator__input}>
                        <div className={styles.calculator__subtitle}>
                          Pakkausten lukumäärä
                        </div>
                        <div className={styles.calculator__inputInput}>
                          <input
                            value={packages}
                            onChange={handlePackagesChange}
                            type="number"
                            min={1}
                            className={styles.packages}
                          />
                        </div>
                      </div>

                      <div className={styles.calculator__priceMeter}>
                        <div className={styles.calculator__subtitle}>
                          Neliöhinta
                        </div>
                        <div className={styles.calculator__productPrice}>
                          <div className={styles.productPrice}>
                            {price}
                          </div>
                          <span>/m&sup2;</span>
                        </div>
                      </div>

                      <div className={styles.calculator__info}>
                        <div
                          className={
                            (styles.calculator__order, styles.order)
                          }
                        >
                          <div className={styles.order__quantity}>
                            <div className={styles.calculator__subtitle}>
                              Tilattava määrä
                            </div>
                            <div className={styles.packingVolume}>
                              1 paketti =
                              {<span>{packing_volume} m&sup2;</span>}
                            </div>
                          </div>

                          <div className={styles.order__total}>
                            <div className={styles.calculator__subtitle}>
                              Yhteensä
                            </div>
                            <span className={styles.totalPrice}>
                              {totalPrice}€
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {inBasket ? (
                  <button
                    onClick={handleRemoveFromBasket}
                    className={`${styles.bagBtn} black-btn`}
                  >
                    Poista roskakorista
                  </button>
                ) : (
                  <button
                    onClick={handleAddToBasket}
                    className={`${styles.bagBtn} black-btn`}
                  >
                    Lisää ostoskassiin
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="conscious" style={{ display: 'none' }}>
        <div className="container">
          <div className="conscious__container">
            <div className="conscious__title">Tietoinen</div>

            <div className="conscious__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et
            </div>

            <div className="conscious__info">
              <div className="conscious__composition">
                Koostumus — <span>Cotton 50%, Lyocell 50%</span>
              </div>

              <div className="conscious__art">
                Art. Nro. — <span>{id}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Snackbar
        message={snackbarMessage}
        duration={2000}
        onClose={() => setSnackbarMessage('')}
      />
    </>
  );
};

export default ProductPage;
