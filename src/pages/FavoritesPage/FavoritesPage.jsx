import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Products from '../../components/Products/Products';
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
                <Products products={favoritesItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
