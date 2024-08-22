import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useBasket from '../../hooks/useBasket';
import styles from './Header.module.scss'; // Импорт модульных стилей

const Header = () => {
  const { basketAmount } = useBasket();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setActive = ({ isActive }) => (isActive ? styles.activeLink : '');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link to="/" className={styles.headerTitle}>
          <img
            src="/img/components/header/logo_black.png"
            alt="logo"
            style={{
              width: 164,
              height: 60,
            }}
          />
        </Link>

        <button className={styles.headerBurger} onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav className={styles.headerNavDesktop}>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <NavLink to="brand" className={setActive}>
                BRÄNDI
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink to="catalogs" className={setActive}>
                tuotteet
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink to="about-us" className={setActive}>
                MEISTÄ
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink to="contact-us" className={setActive}>
                Yhteystiedot
              </NavLink>
            </li>
          </ul>

          <div className={styles.headerButtons}>
            <NavLink to="basket/main" className={styles.headerBasketImg}>
              <span className={styles.headerBasketAmount}>
                {basketAmount}
              </span>
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
          </div>
        </nav>

        <nav
          className={`${styles.headerNavMobile} ${
            isMenuOpen ? styles.open : ''
          }`}
        >
          <button className={styles.headerClose} onClick={closeMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <NavLink
                to="brand"
                className={setActive}
                onClick={closeMenu}
              >
                BRÄNDI
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink
                to="catalogs"
                className={setActive}
                onClick={closeMenu}
              >
                luettelot
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink
                to="about-us"
                className={setActive}
                onClick={closeMenu}
              >
                MEISTÄ
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink
                to="contact-us"
                className={setActive}
                onClick={closeMenu}
              >
                Yhteystiedot
              </NavLink>
            </li>
          </ul>
          <div className={styles.headerButtons}>
            <NavLink
              to="basket/main"
              className={styles.headerButton}
              id="basket-img"
              onClick={closeMenu}
            >
              <span className={styles.basketAmount}>{basketAmount}</span>
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
