import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const AccountPage = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-page' : '');

  return (
    <>
      <Breadcrumbs pageTitle="ACCOUNT" />

      <section className="account-page">
        <div className="container">
          <div className="account-page__container">
            <nav className="account-page__nav">
              <NavLink to="profile" className={setActive}>
                Account
              </NavLink>
              <NavLink to="history" className={setActive}>
                Order history
              </NavLink>
              <NavLink to="feedback" className={setActive}>
                Feedback
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
