import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Products from '../../components/Products/Products';
import Singup from '../../components/Singup/Singup';
import { moduleoProducts } from './moduleoProducts';

const ModuleoPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="Moduleo" previousPage="brand" />

      <section className="info">
        <div className="container">
          <div className="info__container">
            <div className="info__block">
              <span>MODULEO Ylelliset vinyylilattiat.</span>
              <span>
                Vedenpitävä – täydellinen valinta kylpyhuoneisiin ja
                keittiöihin.
              </span>
            </div>
            <div className="info__block">
              <span>
                Naarmuuntumaton – kestävä materiaali suojaa koristepintaa
                paksun kulutusta kestävän kerroksen ansiosta.
              </span>
              <span>
                Monipuoliset asennustavat – voidaan asentaa liimalla tai
                helposti napsauttamalla.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="products__container">
            <div className="products__banners banner">
              <div className="banner__item">
                <img src="./img/pages/moduleo/01.png" alt="banner" />
              </div>
              <div className="banner__item">
                <img src="./img/pages/moduleo/02.png" alt="banner" />
              </div>
            </div>
          </div>

  
            <div className="product">
              <Products products={moduleoProducts} />
            </div>
       
        </div>
      </section>

      <section className="load-more">
        <div className="container">
          <button className="black-btn">load more products</button>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default ModuleoPage;
