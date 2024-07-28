import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';

const FavoritesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'favorite_products',
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
      <Breadcrumbs pageTitle="Suosikit" />

      <section className="favorites">
        <div className="container">
          <div className="favorites__container">
            <h3 className="favorites__title">Suosikit</h3>
            <div className="favorites__count">
              {products.length} tuotetta
            </div>
            <Products
              products={products}
              root="favorites"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
