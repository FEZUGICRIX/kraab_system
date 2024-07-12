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
            <Products products={PRODUCTS.favoritesItems} root='favorites' />
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
