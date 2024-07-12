import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import CardSwiper from '@components/CardSwiper/CardSwiper';
import Singup from '@components/Singup/Singup';

const HomePage = () => {
  return (
    <>
      <section className="dreams">
        <div className="dreams__container container">
          <div className="dreams__content">
            <h1 className="dreams__title main-title home-page-title">
              Me tuomme
            </h1>

            <img
              className="dreams__mini-img"
              src={'./img/pages/home/dreams/home-page-mini.png'}
            />
            <h1 className="dreams__title home-page-title">unelmasi</h1>
            <h1 className="dreams__title dreams__title-right home-page-title">
              eloon kauniisiin <br /> tiloihin
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
          <h1 className="about__title home-page-title">about us</h1>

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
          <h1 className="news__title home-page-title">NEWS</h1>
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
                  // centeredSlides: true,
                },
                0: {
                  slidesPerView: 1,
                  // centeredSlides: true,
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
                <SwiperSlide>
                  <div className="news__item">
                    <img
                      src={'./img/pages/home/news/news01.png'}
                      alt=""
                      className="news__item-img"
                    />
                    <div className="news__item-title">floor covering</div>
                    <div className="news__price">30€</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__item">
                    <img
                      src={'./img/pages/home/news/news01.png'}
                      alt=""
                      className="news__item-img"
                    />
                    <div className="news__item-title">floor covering</div>
                    <div className="news__price">30€</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="news__item">
                    <img
                      src={'./img/pages/home/news/news01.png'}
                      alt=""
                      className="news__item-img"
                    />
                    <div className="news__item-title">floor covering</div>
                    <div className="news__price">30€</div>
                  </div>
                </SwiperSlide>
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
