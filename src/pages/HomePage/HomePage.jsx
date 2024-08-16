import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import CardSwiper from '@components/CardSwiper/CardSwiper';
import Singup from '@components/Singup/Singup';
import Modal from '../../components/Modal/Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <h2 className="about__title title">meistä</h2>

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

      <section className="cards">
        <div className="container">
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
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div className="cards__container">
              <SwiperSlide>
                <div className="item">
                  <img
                    src="/img/pages/home/system_integration.png"
                    alt="card img"
                    className="item__img"
                  />
                  <div className="item__content">
                    <h5 className="item__title">
                      RAITOJEN INTEGROINTI JÄRJESTELMÄT
                    </h5>

                    <p className="item__description">
                      Raadin integrointijärjestelmä mahdollistaa
                      monimutkaisten valaistusratkaisujen toteuttamisen
                      asuin- ja liiketiloissa. Se piilottaa muoviosat
                      (sovittimet, liittimet jne.) ja luo minimalistisen
                      muotoilun.
                    </p>

                    <div className="item__images">
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

                    <button className="cards__order" onClick={openModal}>
                      Ota yhteyttä as
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    src="/img/pages/home/baseboard.png"
                    alt="card img"
                    className="item__img"
                  />
                  <div className="item__content">
                    <h5 className="item__title">VARJO JALKALISTAT</h5>

                    <div className="item__description">
                      Piilolista yhdistää lattian ja seinien värit,
                      tasoittaen siirtymät, vaikka pinnat olisivat
                      epätasaiset. Tämä on erinomainen ratkaisu piilossa
                      oleville oville. Lisäksi piilotettu lista
                      mahdollistaa huonekalujen asettamisen aivan seinää
                      vasten ilman esteitä.
                    </div>

                    <div className="item__images">
                      <img
                        src="/img/pages/home/baseboard01.png"
                        alt="mini-img"
                      />
                      <img
                        src="/img/pages/home/baseboard02.png"
                        alt="mini-img"
                      />
                    </div>

                    <button className="cards__order" onClick={openModal}>
                      Ota yhteyttä as
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    src="/img/pages/home/window.png"
                    alt="card img"
                    className="item__img"
                  />
                  <div className="item__content">
                    <h5 className="item__title">VAALET IKKUNAT</h5>

                    <div className="item__description">
                      Valoaukko on kangasvenytetyn katon valaiseva osa,
                      joka muotoillaan halutusti. Se laajentaa tilan tuntua
                      ja voi olla eri muotoisia ja kokoisia. Valoaukot
                      voivat olla suorakulmioita, ympyröitä, soikeita jne.,
                      ja niissä käytetään kangasta tai PVC-materiaalia.
                    </div>

                    <div className="item__images">
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

                    <button className="cards__order" onClick={openModal}>
                      Ota yhteyttä as
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    src="/img/pages/home/ceiling.png"
                    alt="card img"
                    className="item__img"
                  />
                  <div className="item__content">
                    <h5 className="item__title">kelluva katto</h5>

                    <div className="item__description">
                      Leijuvan katon efekti saavutetaan LED-nauhalla katon
                      reunoilla. Säädettävä etäisyys seinästä luo pehmeää
                      valoa, joka piilottaa epätasaisuudet. SLOTT VILLAR
                      MINI -profiili on itsestään tukeva, vakioetäisyys 25
                      mm, ja hajotin tuottaa tasaisen valon.
                    </div>

                    <div className="item__images">
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

                    <button className="cards__order" onClick={openModal}>
                      Ota yhteyttä as
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <img
                    src="/img/pages/home/shadow_ceiling.png"
                    alt="card img"
                    className="item__img"
                  />
                  <div className="item__content">
                    <h5 className="item__title">VARJOKATTO</h5>

                    <div className="item__description">
                      Varjokatto ei kosketa seiniä ja luo selkeän
                      varjoviivan. Se sopii sekä sileille että
                      teksturoiduille seinille ja poistaa peittävän nauhan
                      tarpeen. Kankaan ja seinän rako luo vaikutelman, että
                      katto ei kosketa pintoja, ja musta profiili piilottaa
                      järjestelmän osat.
                    </div>

                    <div className="item__images">
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

                    <button className="cards__order" onClick={openModal}>
                      Ota yhteyttä as
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Singup />
    </>
  );
};

export default HomePage;
