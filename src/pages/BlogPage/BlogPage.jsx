import Breadcrumbs from '@Breadcrumbs';

import catalogGipps from '../../pdf/Catalog_Gipps.pdf';
import catalogSlim from '../../pdf/Catalog_SLIM27_(EN).pdf';
import catalogUmbra from '../../pdf/TechMap_UMBRA(EN).pdf';
import catalogJM from '../../pdf/catalog-JM_compressed (1).pdf';
import catalogFlor from '../../pdf/Flor catalog.pdf';
import catalogDenkirs from '../../pdf/Catalog DENKIRS (1) (1).pdf';

const BlogPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="BLOGI" />

      <section className="blog">
        <div className="container">
          <div className="blog__container">
            <div className="blog__catalog catalog">
              <div className="catalog__block">
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog Gripps - </h1>
                  <a
                    href={catalogGipps}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog Slim - </h1>
                  <a
                    href={catalogSlim}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog Umbra - </h1>
                  <a
                    href={catalogUmbra}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
              </div>
              <div className="catalog__block">
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog JM - </h1>
                  <a
                    href={catalogJM}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog Flor - </h1>
                  <a
                    href={catalogFlor}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
                <div className="catalog__item">
                  <h1 className="catalog__title">Catalog Denkirs - </h1>
                  <a
                    href={catalogDenkirs}
                    download="filename.pdf"
                    className="catalog__link"
                  >
                    Lataa PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <embed src={catalogPdf} width="100%" height="500px" /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
