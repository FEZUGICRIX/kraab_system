import { Link } from 'react-router-dom';

import CardSwiper from '../../components/CardSwiper/CardSwiper';
import SingUp from '../../components/Singup/Singup';

// Images
import MiniImage from './images/mini.png';
import Swiper from 'swiper';

const BrandPage = () => {
  return (
    <>
      <div className="nav-title">
        <Link to="/">HOMEPAGE</Link>/BRAND
      </div>

      <section className="brand">
        <div className="container">
          <div className="brand__container">
            <img src={MiniImage} alt="brand" />

            <div className="brand__text">
              Tarjoamme tuotteita kuten alumiiniprofiileja, jotka sopivat
              täydellisesti kipsilevyjen kanssa, arkkitehtonista tekstiiliä
              kattoihin ja seiniin, kattokruunuja ja valaisimia. Erityistä
              kiinnostusta herättävät ratkaisumme upotetuille
              valaistuksella varustetuille kelluville katoille sekä
              piilokattokruunuille LED-valaistuksella tai ilman sitä.
            </div>
          </div>
        </div>
      </section>

      <CardSwiper />
      <SingUp />
    </>
  );
};

export default BrandPage;
