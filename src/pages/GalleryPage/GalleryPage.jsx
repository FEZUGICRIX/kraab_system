import Breadcrumbs from '@Breadcrumbs';
import { PRODUCTS } from '@PRODUCTS';

const GalleryPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="GALLERY" />

      <section className="gallery">
        <div className="container">
          <div className="gallery__container">
            <div className="gallery__gallery">
              {PRODUCTS.galleryItems.map((item) => (
                <div className="gallery__item">
                  <div className="gallery__item-title">{item.title}</div>
                  <img
                    src={item.img}
                    className="gallery__item-img"
                    alt="gallery image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
