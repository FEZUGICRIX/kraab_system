'use client';

import { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { PRODUCTS } from '@/store/products';
import styles from './page.module.scss';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <Breadcrumbs pageTitle="GALLERY" />

      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.gallery__container}>
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames={styles.gallery__gallery}
            >
              {PRODUCTS.galleryItems.map((item, index) => (
                <a
                  href={item.img}
                  key={index}
                  className={styles.gallery__item}
                  title={item.title}
                  // data-lg-size="306-306"
                  data-lg-size="736-736"
                  data-src={item.img}
                >
                  <h5 className={styles.gallery__itemTitle}>
                    {item.title}
                  </h5>
                  <img
                    src={item.img}
                    className={styles.gallery__itemImg}
                    alt="gallery image"
                  />
                </a>
              ))}
            </LightGallery>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
