import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';

const DenkirsPage = () => {
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

      <section className="products denkirs">
        <div className="container">
          <div className="product">
            <Products
              products={products}
              root="valot"
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default DenkirsPage;
