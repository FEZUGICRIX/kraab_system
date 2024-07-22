import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '@Breadcrumbs';

const AccountPage = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-page' : '');

  return (
    <>
      <Breadcrumbs pageTitle="Tili" />

      <section className="account-page">
        <div className="container">
          <div className="account-page__container">
            <nav className="account-page__nav">
              <NavLink to="profile" className={setActive}>
                Tili
              </NavLink>
              <NavLink to="history" className={setActive}>
                Tilaushistoria
              </NavLink>
              <NavLink to="feedback" className={setActive}>
                Palaute
              </NavLink>
            </nav>

            <div className="account-page__content">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountPage;
