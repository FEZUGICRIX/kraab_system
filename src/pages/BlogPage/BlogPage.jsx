import { Link } from 'react-router-dom';

import catalogPdf from '../../pdf/Catalog_Gipps.pdf';

const BlogPage = () => {
  return (
    <>
      <div className="nav-title">
        <Link to="/">HOMEPAGE</Link>/BLOG
      </div>

      <section className="blog">
        <div className="container">
          <div className="blog__container">
            <div className="blog__catalog catalog">
              <div className="catalog__item">
                <h1 className="catalog__title">Catalog Gripps - </h1>
                <a
                  href={catalogPdf}
                  download="filename.pdf"
                  className="catalog__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalog__item">
                <h1 className="catalog__title">Catalog Slim - </h1>
                <a
                  href={catalogPdf}
                  download="filename.pdf"
                  className="catalog__link"
                >
                  Lataa PDF
                </a>
              </div>
              <div className="catalog__item">
                <h1 className="catalog__title">Catalog Umbra - </h1>
                <a
                  href={catalogPdf}
                  download="filename.pdf"
                  className="catalog__link"
                >
                  Lataa PDF
                </a>
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
