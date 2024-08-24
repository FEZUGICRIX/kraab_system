'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CardSwiper from '@/components/CardSwiper/CardSwiper';
import Modal from '@/components/Modal/Modal';
import styles from './page.module.scss'; // Import module styles

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className={styles.dreams}>
        <div className={styles.imageContainer}>
          <img src="/img/pages/home/dreams/main.jpg" alt="main img" />
        </div>
        <div className={styles.dreams__container}>
          <div
            className={styles.dreams__title}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Kraab Systems – tuomme valoa tulevaisuuteenne
          </div>
          <div
            className={styles.dreams__subtitle}
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Nosta tilasi uudelle tasolle tarkkuudella ja tyylillä – tutustu
            moduulisuunnittelun tulevaisuuteen
          </div>
        </div>
      </section>

      <CardSwiper />

      <section className={styles.cards}>
        <div className="container">
          <h2 className="title" data-aos="fade-up" data-aos-duration="400">
            Innovatiivisia ratkaisuja sisustukseen
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              1075: {
                slidesPerView: 3,
              },
              655: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className={`${styles.swiperWrapper} mySwiper`}
          >
            <div className={styles.cards__container}>
              <SwiperSlide>
                <div className={styles.item}>
                  <img
                    src="/img/pages/home/system_integration.png"
                    alt="card img"
                    className={styles.item__img}
                  />
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>
                      RAITOJEN INTEGROINTI JÄRJESTELMÄT
                    </h5>

                    <p className={styles.item__description}>
                      Raadin integrointijärjestelmä mahdollistaa
                      monimutkaisten valaistusratkaisujen toteuttamisen
                      asuin- ja liiketiloissa. Se piilottaa muoviosat
                      (sovittimet, liittimet jne.) ja luo minimalistisen
                      muotoilun.
                    </p>

                    <div className={styles.item__images}>
                      <img
                        src="/img/pages/home/system_integration01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/system_integration02.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/system_integration03.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/system_integration04.png"
                        alt="mini-img"
                      />
                    </div>

                    <button
                      className={styles.cards__order}
                      onClick={openModal}
                    >
                      Ota yhteyttä
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.item}>
                  <img
                    src="/img/pages/home/baseboard.png"
                    alt="card img"
                    className={styles.item__img}
                  />
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>
                      VARJO JALKALISTAT
                    </h5>

                    <p className={styles.item__description}>
                      Piilolista yhdistää lattian ja seinien värit,
                      tasoittaen siirtymät, vaikka pinnat olisivat
                      epätasaiset. Tämä on erinomainen ratkaisu piilossa
                      oleville oville. Lisäksi piilotettu lista
                      mahdollistaa huonekalujen asettamisen aivan seinää
                      vasten ilman esteitä.
                    </p>

                    <div className={styles.item__images}>
                      <img
                        src="/img/pages/home/baseboard01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/baseboard02.png"
                        alt="mini-img"
                      />
                    </div>

                    <button
                      className={styles.cards__order}
                      onClick={openModal}
                    >
                      Ota yhteyttä
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.item}>
                  <img
                    src="/img/pages/home/window.png"
                    alt="card img"
                    className={styles.item__img}
                  />
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>VAALET IKKUNAT</h5>

                    <p className={styles.item__description}>
                      Valoaukko on kangasvenytetyn katon valaiseva osa,
                      joka muotoillaan halutusti. Se laajentaa tilan tuntua
                      ja voi olla eri muotoisia ja kokoisia. Valoaukot
                      voivat olla suorakulmioita, ympyröitä, soikeita jne.,
                      ja niissä käytetään kangasta tai PVC-materiaalia.
                    </p>

                    <div className={styles.item__images}>
                      <img
                        src="/img/pages/home/window01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/window02.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/window03.png"
                        alt="mini-img"
                      />
                    </div>

                    <button
                      className={styles.cards__order}
                      onClick={openModal}
                    >
                      Ota yhteyttä
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.item}>
                  <img
                    src="/img/pages/home/ceiling.png"
                    alt="card img"
                    className={styles.item__img}
                  />
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>
                      KELLUVA PROFIILI GIPPS VILLAR 2.0
                    </h5>

                    <p className={styles.item__description}>
                      Profiilia käytetään luomaan ”ilmassa leijuvan”
                      vaikutelman katto on valmistettu kipsilevystä, katto
                      on kiinnitetty syvennyksellä seinistä. Rakenteen
                      kiinnityskohta on huomaamaton, ja katto on valaistu
                      pehmeällä valolla koko kehältä.
                    </p>

                    <div className={styles.item__images}>
                      <img
                        src="/img/pages/home/ceiling01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/ceiling02.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/ceiling03.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/ceiling04.png"
                        alt="mini-img"
                      />
                    </div>

                    <button
                      className={styles.cards__order}
                      onClick={openModal}
                    >
                      Ota yhteyttä
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.item}>
                  <img
                    src="/img/pages/home/shadow_ceiling.png"
                    alt="card img"
                    className={styles.item__img}
                  />
                  <div className={styles.item__content}>
                    <h5 className={styles.item__title}>VARJOKATTO</h5>

                    <p className={styles.item__description}>
                      Varjokatto ei kosketa seiniä ja luo selkeän
                      varjoviivan. Se sopii sekä sileille että
                      teksturoiduille seinille ja poistaa peittävän nauhan
                      tarpeen. Kankaan ja seinän rako luo vaikutelman, että
                      katto ei kosketa pintoja, ja musta profiili piilottaa
                      järjestelmän osat.
                    </p>

                    <div className={styles.item__images}>
                      <img
                        src="/img/pages/home/shadow_ceiling01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/shadow_ceiling02.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/shadow_ceiling03.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/shadow_ceiling04.png"
                        alt="mini-img"
                      />
                    </div>

                    <button
                      className={styles.cards__order}
                      onClick={openModal}
                    >
                      Ota yhteyttä
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>

      <section className={styles.about}>
        <div className={`${styles.about__container} container`}>
          <h2
            className={`${styles.about__title} title`}
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Meistä
          </h2>

          <div className={styles.about__content}>
            <div className={styles.about__item}>
              Yrityksemme tarjoaa ainutlaatuisia materiaaleja tilojen
              sisustukseen, joita ei ole saatavilla muualla Suomessa.
              Tarjoamme moderneja ratkaisuja kattojen, seinien ja
              valaistuksen osalta. Tilatessanne asennustyöt saatte meiltä
              lahjaksi 3D-projektin, joka mukautetaan toiveidenne mukaan.
            </div>
            <div className={styles.about__item}>
              Yhteistyökumppanimme ovat käyneet koulutuksen ja saaneet
              sertifikaatit näiden materiaalien asennukseen, mikä takaa
              korkean laadun ja luotettavuuden. Ota yhteyttä saadaksesi
              lisätietoja.
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Home;
