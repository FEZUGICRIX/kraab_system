import { Link } from 'react-router-dom';

const SearchPage = () => {
  return (
    <>
      <div className="nav-title">
        <Link to="/">HOMEPAGE</Link>/SEARCH
      </div>

      <section className="search">
        <div className="search__container container">
          <h2 className="search__title">search</h2>

          <div className="search__input">
            <div className="search__img">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3389 17.4129L26.6015 24.6758C26.8568 24.9312 27.0001 25.2776 27 25.6388C26.9999 25.9999 26.8563 26.3462 26.6008 26.6015C26.3454 26.8568 25.999 27.0001 25.6379 27C25.2767 26.9999 24.9304 26.8563 24.6752 26.6008L17.4125 19.338C15.2414 21.0196 12.5112 21.811 9.77742 21.5511C7.04359 21.2912 4.51146 19.9995 2.69613 17.9389C0.880803 15.8783 -0.0813541 13.2035 0.00539479 10.4586C0.0921436 7.71377 1.22128 5.10506 3.16311 3.16318C5.10493 1.22131 7.71357 0.0921459 10.4584 0.00539492C13.2031 -0.0813561 15.8779 0.880824 17.9384 2.6962C19.999 4.51157 21.2906 7.04377 21.5505 9.77767C21.8104 12.5116 21.0191 15.2418 19.3375 17.4129H19.3389ZM10.8005 18.8992C12.9487 18.8992 15.0088 18.0459 16.5278 16.5269C18.0468 15.0079 18.9001 12.9476 18.9001 10.7994C18.9001 8.65121 18.0468 6.59099 16.5278 5.07198C15.0088 3.55297 12.9487 2.6996 10.8005 2.6996C8.65235 2.6996 6.59218 3.55297 5.0732 5.07198C3.55423 6.59099 2.70088 8.65121 2.70088 10.7994C2.70088 12.9476 3.55423 15.0079 5.0732 16.5269C6.59218 18.0459 8.65235 18.8992 10.8005 18.8992Z"
                  fill="#282828"
                />
              </svg>
            </div>

            <input
              type="search"
              placeholder="SEARCH..."
              className="search__search"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
