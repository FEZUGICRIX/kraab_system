import Breadcrumbs from '@Breadcrumbs';
import CardSwiper from '@components/CardSwiper/CardSwiper';

const BrandPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="BRÄNDI" />

      <CardSwiper />

      <section className="brand">
        <div className="container">
          <div className="brand__container">
            <img
              className="brand__img"
              src={'./img/pages/brand/brand.jpg'}
              alt="brand"
            />

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
    </>
  );
};

export default BrandPage;
