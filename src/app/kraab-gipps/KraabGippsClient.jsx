'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/api/getProducts';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Products from '@/components/Products/Products';

const KraabGippsClient = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'kraab_gipps_products',
          type: 'get_products',
        });
        setProducts(data.data);
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
