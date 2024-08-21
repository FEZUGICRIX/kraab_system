import Breadcrumbs from '@Breadcrumbs';

import catalogGipps from '../../pdf/Catalog_Gipps.pdf';
import catalogSlim from '../../pdf/Catalog_SLIM27_(EN).pdf';
import catalogUmbra from '../../pdf/TechMap_UMBRA(EN).pdf';
import catalogJM from '../../pdf/catalog-JM_compressed (1).pdf';
import catalogFlor from '../../pdf/Flor catalog.pdf';
import catalogValot from '../../pdf/valot.pdf';
import gallery from '../../pdf/gallery.pdf';

const CatalogsPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="luettelot" />

      <section className="catalogs">
        <div className="container">
          <div className="catalogs__container">
            <div className="catalogs__catalog catalogs">
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog Gripps </h1>
                <a
                  href={catalogGipps}
                  download="catalogs-gipps.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog Valot </h1>
                <a
                  href={catalogValot}
                  download="catalogs-gipps.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog Slim </h1>
                <a
                  href={catalogSlim}
                  download="catalogs-slim.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog Umbra </h1>
                <a
                  href={catalogUmbra}
                  download="catalogs-umbra.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog JM </h1>
                <a
                  href={catalogJM}
                  download="catalogs-JM.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Catalog Flor </h1>
                <a
                  href={catalogFlor}
                  download="catalogs-flor.pdf"
                  className="catalogs__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalogs__item">
                <h1 className="catalogs__title">Kuvaston sisältö </h1>
                <a
                  href={gallery}
                  download="gallery.pdf"
                  className="catalogs__link"
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

export default CatalogsPage;
