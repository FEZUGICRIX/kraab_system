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
              We offer products such as aluminum profiles ideal for
              drywall, architectural textiles for ceilings and walls,
              cornices and luminaires. Of particular interest are our
              solutions for backlit floating ceilings as well as for
              concealed ceilings (shadow cornices) with and without LED
              lighting.
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
