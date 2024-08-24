'use client';

import { useEffect, useState } from 'react';

import { getProducts } from '@/api/getProducts';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Products from '@/components/Products/Products';

const ValotClientPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'denkirs_products',
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
      <Breadcrumbs pageTitle="Valot" previousPages={['brand']} />

      <section>
        <div className="container">
          <div className="product">
            <Products products={products} root="valot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ValotClientPage;
