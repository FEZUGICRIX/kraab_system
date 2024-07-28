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
            <span className="filter__title">suodatus & lajittelu</span>
            <span className="filter__products">tuotteet</span>
          </div>
        )}
        <div className="products__items product">
          {products.map((item) => {
            const { id, images, image_path, title, colors, price } = item;
            const imagesParse = JSON.parse(images);

            return (
              <div className="product__item" key={id}>
                <Link to={`/${root}/product/${id}`}>
                  <img
                    src={`${image_path}${imagesParse[0]}`}
                    alt="product image"
                    className="product__img"
                  />
                </Link>

                <Link to={`/${root}/product/${id}`}>
                  <div className="product__title">{title}</div>
                </Link>

                {colors && (
                  <div className="product__colors">
                    {colors.map((color, index) => (
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
                )}

                <div className="product__price">{price}€</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
