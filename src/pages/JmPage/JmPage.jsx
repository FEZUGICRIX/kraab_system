import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';

const JmPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'jm_products',
          type: 'get_products',
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle="JM" previousPages={['brand']} />

      <section className="products jm">
        <div className="container">
          <div className="product">
            <Products products={products} root="jm" />
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default JmPage;
