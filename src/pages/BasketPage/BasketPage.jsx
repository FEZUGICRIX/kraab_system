import { Outlet } from 'react-router-dom';
import Breadcrumbs from '@Breadcrumbs';

const BasketPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="ostoskassi" />
      <div className="container">
        <h3 className="basket__title">Ostoskassi</h3>
        <Outlet />
      </div>
    </>
  );
};

export default BasketPage;
