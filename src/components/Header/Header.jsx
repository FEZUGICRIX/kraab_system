import { NavLink, Link } from 'react-router-dom';
import useBasket from '../../hooks/useBasket';

const Header = () => {
  const { basketAmount } = useBasket();

  const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__main">
          <Link to="/" className="header__title">
            KRAAB_SYSTEM
          </Link>
          <div className="header__buttons">
            <NavLink
              to="basket"
              className="header__button"
              id="basket-img"
            >
              <span className="basket-amount">{basketAmount}</span>
              <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5944 1.92843C10.3164 1.92843 8.13179 2.8427 6.52103 4.47013C4.91027 6.09755 4.00536 8.30482 4.00536 10.6063H2.09668C2.09668 7.79337 3.20269 5.0956 5.17139 3.10653C7.1401 1.11745 9.81023 0 12.5944 0C15.3786 0 18.0487 1.11745 20.0174 3.10653C21.9861 5.0956 23.0921 7.79337 23.0921 10.6063H21.1834C21.1834 8.30482 20.2785 6.09755 18.6678 4.47013C17.057 2.8427 14.8724 1.92843 12.5944 1.92843Z"
                  fill="#222222"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.397843 10.0032C0.487287 9.89062 0.600608 9.79977 0.729445 9.73736C0.858281 9.67494 0.999345 9.64255 1.14223 9.64258H24.0463C24.1891 9.64263 24.3301 9.67507 24.4589 9.73749C24.5876 9.79991 24.7008 9.89073 24.7902 10.0032C24.8796 10.1158 24.9429 10.2471 24.9753 10.3876C25.0078 10.5281 25.0086 10.6742 24.9778 10.8151L21.4925 26.6609C21.3514 27.3035 20.9976 27.8782 20.4896 28.2901C19.9815 28.7021 19.3497 28.9267 18.6982 28.9268H6.49034C5.83892 28.9267 5.20703 28.7021 4.699 28.2901C4.19097 27.8782 3.83718 27.3035 3.69604 26.6609L0.210792 10.8151C0.180169 10.6745 0.181074 10.5288 0.213441 10.3887C0.245808 10.2485 0.308816 10.1175 0.397843 10.0051V10.0032ZM2.33133 11.571L5.5589 26.2425C5.60583 26.4568 5.7237 26.6485 5.89306 26.7859C6.06241 26.9234 6.27311 26.9983 6.49034 26.9984H18.6982C18.9155 26.9983 19.1262 26.9234 19.2955 26.7859C19.4649 26.6485 19.5827 26.4568 19.6297 26.2425L22.8553 11.571H2.33324H2.33133Z"
                  fill="#222222"
                />
              </svg>
            </NavLink>
            <NavLink to="favorites" className="header__button">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0003 5.49608L13.6558 4.02208C10.5001 0.562095 4.7137 1.75609 2.62488 6.10608C1.64423 8.15207 1.42297 11.1061 3.21365 14.876C4.9387 18.506 8.52756 22.854 15.0003 27.59C21.473 22.854 25.0599 18.506 26.7869 14.876C28.5775 11.1041 28.3582 8.15207 27.3756 6.10608C25.2868 1.75609 19.5004 0.560095 16.3447 4.02008L15.0003 5.49608ZM15.0003 30C-13.75 9.73607 6.14812 -6.07988 14.6702 2.28609C14.7828 2.39609 14.8934 2.51009 15.0003 2.62809C15.1061 2.5102 15.2161 2.39678 15.3303 2.28809C23.8505 -6.08388 43.7505 9.73407 15.0003 30Z"
                  fill="#222222"
                />
              </svg>
            </NavLink>
          </div>
        </div>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink to="brand" className={setActive}>
                BRÄNDI
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="blog" className={setActive}>
                BLOGI
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="about-us" className={setActive}>
                MEISTÄ
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="contact-us" className={setActive}>
                OTA YHTEYTTÄ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
