import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { favoritesItems } from './favoritesItems';

const FavoritesPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="favorites" />

      <section className="favorites">
        <div className="container">
          <div className="favorites__container">
            <h3 className="favorites__title">Favorites</h3>
            <div className="favorites__count">38 products</div>

            <div className="favorites__content">
              <div className="favorites__filter">
                <div className="filter">filter & sort</div>
                <span>Products</span>
              </div>

              <div className="favorites__products product">
                {favoritesItems.map((item) => (
                  <div className="product__item" key={item.id}>
                    <img
                      src={item.img}
                      alt="product image"
                      className="product__img"
                    />

                    <div className="product__title">{item.title}</div>

                    <div className="product__colors">
                      {item.colors.map((item) => (
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            background: item,
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
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
