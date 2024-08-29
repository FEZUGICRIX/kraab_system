import Link from 'next/link';
import { useEffect } from 'react';
import styles from './Products.module.scss';

const Products = ({ products }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.products__container}>
        <div className={(styles.product, styles.products__items)}>
          {products.map((item) => {
            const { id, images, image_path, title, price } = item;
            const imagesParse = JSON.parse(images);

            return (
              <div className={styles.product__item} key={id}>
                <Link href={`/product/${id}`}>
                  <img
                    src={`${image_path}${imagesParse[0]}`}
                    alt="product image"
                    className={styles.product__img}
                  />
                </Link>

                <Link href={`/product/${id}`}>
                  <div className={styles.product__title}>{title}</div>
                </Link>

                <div className={styles.product__price}>{price}€</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
