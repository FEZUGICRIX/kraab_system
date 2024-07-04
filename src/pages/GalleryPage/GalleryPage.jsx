import { Link } from 'react-router-dom';

import { galleryItems } from './galleryItems';

const GalleryPage = () => {
  console.log(galleryItems);
  return (
    <>
      <div className="nav-title">
        <Link to="/">HOMEPAGE</Link>/GALLERY
      </div>

      <section className="gallery">
        <div className="container">
          <div className="gallery__container">
            <div className="gallery__gallery">
              {galleryItems.map((item) => (
                <div className="gallery__item">
                  <div className="gallery__item-title">{item.title}</div>
                  {item.video ? (
                    <video controls className="gallery__item-img">
                      <source src={item.img} type="video/mp4" />
                      This browser does not display the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.img}
                      className="gallery__item-img"
                      alt="gallery image"
                    />
                  )}
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
