import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import CardSwiper from '@/components/CardSwiper/CardSwiper';
import styles from './page.module.scss';

export const metadata = {
  title: 'BRÄNDI',
  description:
    'Tarjoamme tuotteita kuten alumiiniprofiileja, jotka sopivat täydellisesti kipsilevyjen kanssa, arkkitehtonista tekstiiliä kattoihin ja seiniin, kattokruunuja ja valaisimia. Erityistä kiinnostusta herättävät ratkaisumme upotetuille valaistuksella varustetuille kelluville katoille sekä piilokattokruunuille LED-valaistuksella tai ilman sitä.',
};

const Brand = () => {
  return (
    <>
      <Breadcrumbs pageTitle="BRÄNDI" />

      <CardSwiper />

      <section className={styles.brand}>
        <div className="container">
          <div className={styles.brand__container}>
            <img
              className={styles.brand__img}
              src={'./img/pages/brand/brand.jpg'}
              alt="brand"
            />

            <div className={styles.brand__text}>
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

export default Brand;
