'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CardSwiper.module.scss';

const CardSwiper = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.project}>
      <div className={`${styles.project__container} container`}>
        <h2
          className={`${styles.project__title} title`}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Projektiisi keskitytään parhaillaan
        </h2>

        <div className={styles.card}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1300: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              800: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            className={`${styles.mySwiper} mySwiper`}
          >
            <div className={styles.cards__items}>
              <SwiperSlide>
                <Link href="/moduleo" className={styles.card__item}>
                  <div className={styles.card__number}>01</div>
                  <h5 className={styles.card__title}>Moduleo</h5>
                  <img
                    src={'./img/components/cardSwiper/01.jpeg'}
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/kraab-slim" className={styles.card__item}>
                  <div className={styles.card__number}>02</div>
                  <h5 className={styles.card__title}>Kraab Slim</h5>
                  <img
                    src={'./img/components/cardSwiper/02.png'}
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/kraab-gipps" className={styles.card__item}>
                  <div className={styles.card__number}>03</div>
                  <h5 className={styles.card__title}>Kraab Gipps</h5>
                  <img
                    src={
                      './img/pages/kraab_gipps_products/KRAAB GIPPS.jpg'
                    }
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/valot" className={styles.card__item}>
                  <div className={styles.card__number}>04</div>
                  <h5 className={styles.card__title}>Valot</h5>
                  <img
                    src={'./img/components/cardSwiper/03.png'}
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/gallery" className={styles.card__item}>
                  <div className={styles.card__number}>05</div>
                  <h5 className={styles.card__title}>3D rendering</h5>
                  <img
                    src={'./img/components/cardSwiper/04.png'}
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="/jm" className={styles.card__item}>
                  <div className={styles.card__number}>06</div>
                  <h5 className={styles.card__title}>JM</h5>
                  <img
                    src={'./img/components/cardSwiper/05.png'}
                    className={styles.card__img}
                    alt="card image"
                  />

                  <div className={styles.card__arrow}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 74 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="37.1459"
                        cy="37.787"
                        r="36.8192"
                        fill="#454545"
                      />
                      <path
                        d="M25.3383 23.7362C24.3567 22.8013 22.803 22.8392 21.868 23.8208C20.9331 24.8025 20.971 26.3562 21.9527 27.2912L25.3383 23.7362ZM49.4788 52.5137C50.8341 52.4807 51.9059 51.3552 51.8729 50L51.3342 27.915C51.3012 26.5598 50.1757 25.4879 48.8205 25.521C47.4652 25.554 46.3934 26.6795 46.4264 28.0347L46.9052 47.6658L27.2742 48.1446C25.9189 48.1777 24.8471 49.3031 24.8801 50.6583C24.9132 52.0136 26.0386 53.0854 27.3939 53.0524L49.4788 52.5137ZM21.9527 27.2912L47.7261 51.8373L51.1118 48.2824L25.3383 23.7362L21.9527 27.2912Z"
                        fill="#FFE7D9"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CardSwiper;
