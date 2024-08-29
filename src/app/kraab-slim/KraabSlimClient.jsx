'use client';

import { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Products from '@/components/Products/Products';
import styles from './page.module.scss';
import axios from 'axios';

const KraabSlimPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          '/api/products?catalog=kraab_slim_products'
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle="Kraab Slim" previousPages={['brand']} />
      <section className={`${styles.kraabmod} products`}>
        <div className="container">
          <div className="product">
            <Products products={products} root="kraab-slim" />
          </div>
        </div>
      </section>
    </>
  );
};

export default KraabSlimPage;
