import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';
import { PRODUCTS } from '@PRODUCTS';

const ModuleoPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="Moduleo" previousPages={['brand']} />

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
            <div className="favorites__filter">
              <div className="filter">filter & sort</div>
              <span>Products</span>
            </div>

            <div className="product">
              <Products products={PRODUCTS.moduleoPage} />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="load-more">
        <div className="container">
          <button className="black-btn">load more products</button>
        </div>
      </section> */}

      <Singup />
    </>
  );
};

export default ModuleoPage;
