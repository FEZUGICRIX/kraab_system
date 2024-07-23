import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';

const DenkirsPage = () => {
  const [products, setProducts] = useState([]);
  const basePath = '/img/pages/denkirs/';

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

      <section className="products denkirs">
        <div className="container">
          <div className="product">
            <Products
              products={products}
              root="valot"
              basePath={basePath}
            />
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default DenkirsPage;
