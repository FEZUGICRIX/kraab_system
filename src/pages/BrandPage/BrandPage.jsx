import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CardSwiper from '../../components/CardSwiper/CardSwiper';
import SingUp from '../../components/Singup/Singup';

const BrandPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="BRAND" />

      <section className="brand">
        <div className="container">
          <div className="brand__container">
            <img src={'./img/pages/brand/mini.png'} alt="brand" />

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
