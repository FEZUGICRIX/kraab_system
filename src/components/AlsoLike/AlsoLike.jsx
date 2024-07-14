import { PRODUCTS } from '@PRODUCTS';
import Products from '@components/Products/Products';

const AlsoLike = ({ root }) => {
  return (
    <section className="like">
      <div className="container">
        <div className="like__container">
          <div className="like__title">Also You May Buy:</div>

          <div className="like__products">
            <Products
              products={PRODUCTS.AlsoLike}
              root={root}
              extra={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlsoLike;
