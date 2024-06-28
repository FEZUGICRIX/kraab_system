import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Images
import homePageImage from './images/dreams/home-page.png';
import homePageMiniImage from './images/dreams/home-page-mini.png';
import homePageSiderImage from './images/dreams/home-page-sider.png';
import newsImage01 from './images/news/news01.png';
import futuristicImage from './images/futuristic.png';
import CardSwiper from '../../components/CardSwiper/CardSwiper';

const HomePage = () => {
  return (
    <>
      <section className="dreams">
        <div className="dreams__container container">
          <div className="dreams__content">
            <h1 className="dreams__title main-title home-page-title">
              we bring dreams
            </h1>

            <img className="dreams__mini-img" src={homePageMiniImage} />
            <h1 className="dreams__title home-page-title">to life</h1>
            <h1 className="dreams__title dreams__title-right home-page-title">
              in beautiful <br /> spaces.
            </h1>
          </div>

          <div className="dreams__img">
            <img src={homePageImage} />
          </div>

          <div className="dreams__img-sider">
            <img src={homePageSiderImage} />
          </div>
        </div>
      </section>
      <div className="grey-block"></div>

      <section className="project">
        <div className="project__container container">
          <h1 className="project__title title home-page-title">
            they’re working on your project.
          </h1>

          <div className="card">
            <CardSwiper />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__container container">
          <h1 className="about__title home-page-title">about us.</h1>

          <div className="about__content">
            <div className="about__item">
              Tarjoamme tuotteita, kuten alumiiniprofiileja, jotka sopivat
              erinomaisesti kipsilevyihin, arkkitehtonisia tekstiilejä
              kattoihin ja seiniin, reunalistoja ja valaisimia.
              <br />
              <br />
              Erityisen kiinnostavia ovat ratkaisumme taustavalaistuja
              alakattoja varten.
            </div>
            <div className="about__item">
              Myös piilokattoihin (varjojulkisivut), joissa on tai ei ole
              LED-valaistusta.
              <br />
              <br />
              Ota yhteyttä, niin kerromme mielellämme lisää ja räätälöimme
              tarpeisiisi sopivan ratkaisun!
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="news__container container">
          <h1 className="news__title home-page-title">NEWS.</h1>
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
                      src={newsImage01}
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
                      src={newsImage01}
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
                      src={newsImage01}
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

      <section className="futuristic">
        <img
          src={futuristicImage}
          alt="futuristic"
          className="futuristic__image"
        />
      </section>

      <section className="singup">
        <div className="container">
          <div className="singup__container">
            <div className="singup__content">
              <h5 className="singup__title">SING UP FOR THE NEWSLETTER</h5>
              <span className="singup__text">
                Subscribe for the latest stories and promotions
              </span>
            </div>

            <form
              className="singup__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="singup__input"
              />
              <button className="singup__button">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 0H0.75C0.335156 0 0 0.335156 0 0.75V15.75C0 16.1648 0.335156 16.5 0.75 16.5H20.25C20.6648 16.5 21 16.1648 21 15.75V0.75C21 0.335156 20.6648 0 20.25 0ZM19.3125 2.59687V14.8125H1.6875V2.59687L1.04063 2.09297L1.96172 0.909375L2.96484 1.68984H18.0375L19.0406 0.909375L19.9617 2.09297L19.3125 2.59687ZM18.0375 1.6875L10.5 7.54688L2.9625 1.6875L1.95938 0.907031L1.03828 2.09062L1.68516 2.59453L9.69141 8.81953C9.92165 8.99841 10.2049 9.09551 10.4965 9.09551C10.7881 9.09551 11.0713 8.99841 11.3016 8.81953L19.3125 2.59687L19.9594 2.09297L19.0383 0.909375L18.0375 1.6875Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
