import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Products from '@components/Products/Products';

const AlsoLike = ({ root }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'alsoLike_products',
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
    <section className="like">
      <div className="container">
        <div className="like__container">
          <div className="like__title">Saatat myös pitää:</div>

          <div className="like__products">
            <Products products={products} root={root} extra={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlsoLike;
