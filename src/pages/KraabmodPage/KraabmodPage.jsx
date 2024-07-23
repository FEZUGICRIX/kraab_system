import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';

const KraabmodPage = () => {
  const [products, setProducts] = useState([]);
  const basePath = '/img/pages/kraabmod/';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'kraabmod_products',
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
      <Breadcrumbs pageTitle="Kraabmod" previousPages={['brand']} />
      <section className="products kraabmod">
        <div className="container">
          <div className="product">
            <Products products={products} root="kraabmod" basePath={basePath} />
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default KraabmodPage;
