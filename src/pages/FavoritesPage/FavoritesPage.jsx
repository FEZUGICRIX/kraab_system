import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import { PRODUCTS } from '@PRODUCTS';

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
              <div className="filter">
                <span className="filter__title">filter & sort</span>
                <span className='filter__products'>Products</span>
              </div>

              <div className="favorites__products product">
                <Products products={PRODUCTS.favoritesItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
