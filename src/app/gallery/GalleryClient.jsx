'use client';

import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { PRODUCTS } from '@/store/products';
import styles from './page.module.scss';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle="GALLERY" />

      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.gallery__container}>
            <div className={styles.gallery__gallery}>
              {PRODUCTS.galleryItems.map((item, index) => (
                <div key={index} className={styles.gallery__item}>
                  <div className={styles.gallery__itemTitle}>
                    {item.title}
                  </div>
                  <img
                    src={item.img}
                    className={styles.gallery__itemImg}
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
