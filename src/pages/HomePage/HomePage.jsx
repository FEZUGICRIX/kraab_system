import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '@api/getProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import CardSwiper from '@components/CardSwiper/CardSwiper';
import Singup from '@components/Singup/Singup';

const HomePage = () => {
  const [newsProducts, setNewsProducts] = useState([]);

  useEffect(() => {
    const fetchBasketProducts = async () => {
      try {
        const promises = [306, 405, 507].map(async (id) => {
          const product = await getProducts({ type: 'get_product', id });
          return product;
        });

        const products = await Promise.all(promises);
        const filteredProducts = products.filter(
          (product) => product !== null
        );
        setNewsProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBasketProducts();
  }, []);

  return (
    <>
      <section className="dreams">
        <div className="dreams__container container">
          <div className="dreams__content">
            <h1 className="dreams__title main-title home-page-title">
              tuomme unelmia
            </h1>

            <img
              className="dreams__mini-img"
              src={'./img/pages/home/dreams/home-page-mini.png'}
            />
            <h1 className="dreams__title home-page-title dreams__title-left">
              elämään
            </h1>
            <h1 className="dreams__title dreams__title-right home-page-title">
              kauniissa <br /> tiloissa
            </h1>
          </div>

          <div className="dreams__img">
            <img src={'./img/pages/home/dreams/home-page.png'} />
          </div>

          <div className="dreams__img-sider">
            <img src={'./img/pages/home/dreams/home-page-sider.png'} />
          </div>
        </div>
      </section>
      <div className="grey-block"></div>

      <CardSwiper />

      <section className="about">
        <div className="about__container container">
          <h1 className="about__title home-page-title">meistä</h1>

          <div className="about__content">
            <div className="about__item">
              Yrityksemme tarjoaa ainutlaatuisia materiaaleja tilojen
              sisustukseen, joita ei ole saatavilla muualla Suomessa.
              Tarjoamme moderneja ratkaisuja kattojen, seinien ja
              valaistuksen osalta. Tilatessanne asennustyöt saatte meiltä
              lahjaksi 3D-projektin, joka mukautetaan toiveidenne mukaan.
            </div>
            <div className="about__item">
              Yhteistyökumppanimme ovat käyneet koulutuksen ja saaneet
              sertifikaatit näiden materiaalien asennukseen, mikä takaa
              korkean laadun ja luotettavuuden. Ota yhteyttä saadaksesi
              lisätietoja.
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="news__container container">
          <h1 className="news__title home-page-title">UUTISIA</h1>
          <div className="news__swiper">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                1300: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1105: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div className="news__items">
                {newsProducts.map((item) => {
                  const catalogMap = {
                    306: 'valot',
                    405: 'kraabmod',
                    507: 'jm',
                  };

                  const basePate = {
                    306: '/img/pages/denkirs/',
                    405: '/img/pages/kraabmod/',
                    507: '/img/pages/jm/',
                  };

                  const imagesParse = JSON.parse(item.images);
                  const catalog = catalogMap[item.id] || '';

                  return (
                    <SwiperSlide key={item.id}>
                      <div className="news__item">
                        <Link to={`${catalog}/product/${item.id}`}>
                          <img
                            src={`${basePate[item.id]}${imagesParse[0]}`}
                            alt="product image"
                            className="news__item-img"
                          />
                        </Link>
                        <div className="news__item-title">
                          <Link to={`${catalog}/product/${item.id}`}>
                            {item.title}
                          </Link>
                        </div>
                        <div className="news__price">{item.price}€</div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default HomePage;
