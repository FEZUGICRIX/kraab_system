import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products, root, extra = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products">
      <div className="products__container">
        {extra && (
          <div className="filter">
            <span className="filter__title">filter & sort</span>
            <span className="filter__products">Products</span>
          </div>
        )}

        <div className="products__items product">
          {products.map((item) => (
            <div className="product__item" key={item.id}>
              <Link to={`/${root}/product/${item.id}`}>
                <img
                  src={item.img}
                  alt="product image"
                  className="product__img"
                />
              </Link>

              <Link to={`product/${item.id}`}>
                <div className="product__title">{item.title}</div>
              </Link>

              <div className="product__colors">
                {item.colors?.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: 10,
                      height: 10,
                      background: color,
                      borderRadius: 10,
                    }}
                  ></div>
                ))}
              </div>

              <div className="product__price">{item.price}€</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
