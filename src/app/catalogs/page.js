import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './page.module.scss';

export const metadata = {
  title: 'LUETTELOT',
  description: 'Catalogs',
};

const Catalogs = () => {
  return (
    <>
      <Breadcrumbs pageTitle="luettelot" />

      <section className={styles.catalogs}>
        <div className="container">
          <div className={styles.catalogs__container}>
            <div className={`${styles.catalogs} catalogs`}>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog Gripps</h1>
                <a
                  href="/pdf/Catalog_Gipps.pdf"
                  download="catalogs-gipps.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog Valot</h1>
                <a
                  href="/pdf/valot.pdf"
                  download="catalogs-valot.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog Slim</h1>
                <a
                  href="/pdf/Catalog_SLIM27_(EN).pdf"
                  download="catalogs-slim.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog Umbra</h1>
                <a
                  href="/pdf/TechMap_UMBRA(EN).pdf"
                  download="catalogs-umbra.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog JM</h1>
                <a
                  href="/pdf/catalog-JM_compressed (1).pdf"
                  download="catalogs-JM.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>Catalog Flor</h1>
                <a
                  href="/pdf/Flor catalog.pdf"
                  download="catalogs-flor.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
              <div className={styles.catalogs__item}>
                <h1 className={styles.catalogs__title}>
                  Kuvaston sisältö
                </h1>
                <a
                  href="/pdf/gallery.pdf"
                  download="gallery.pdf"
                  className={styles.catalogs__link}
                >
                  Lataa PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogs;
