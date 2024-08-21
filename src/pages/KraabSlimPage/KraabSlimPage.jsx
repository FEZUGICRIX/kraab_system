import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';

const KraabSlimPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'kraab_slim_products',
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
      <Breadcrumbs pageTitle="Kraab Slim" previousPages={['brand']} />
      <section className="products kraabmod">
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
