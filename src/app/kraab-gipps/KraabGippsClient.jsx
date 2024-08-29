'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Products from '@/components/Products/Products';

const KraabGippsClient = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          '/api/products?catalog=kraab_gipps_products'
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
      <Breadcrumbs pageTitle="Kraab Gipps" previousPages={['brand']} />
      <section className="products kraabmod">
        <div className="container">
          <div className="product">
            <Products products={products} root="kraab-gipps" />
          </div>
        </div>
      </section>
    </>
  );
};

export default KraabGippsClient;
