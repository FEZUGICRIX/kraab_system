import { NavLink } from 'react-router-dom';

const Footer = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__main">
          <div className="footer__info">
            <h3 className="footer__title">KRAAB_SYSTEM</h3>

            <div className="footer__info-text">
              We make your dreams come true in beautiful spaces!
            </div>
            <div className="footer__info-info">
              <div className="footer__info-address">
                Veteraanintie 2, 06100 Porvoo, Finland
              </div>
              <a href=" tel:+35891234567">+358 9 1234567</a>
              <a href="mailto:info@flooranddecor.fi">
                info@flooranddecor.fi
              </a>
            </div>

            <div className="footer__info-social">
              {/* facebook */}
              <a href="https://www.facebook.com/kraabmod.fin">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.4559 19.873V10.548H0V7.19057H2.4559V4.32288C2.4559 2.06942 3.9066 0 7.24934 0C8.60276 0 9.60356 0.130268 9.60356 0.130268L9.5247 3.26555C9.5247 3.26555 8.50405 3.25558 7.39027 3.25558C6.18483 3.25558 5.9917 3.81331 5.9917 4.73902V7.19057H9.62052L9.46263 10.548H5.9917V19.873H2.4559Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* twitter */}
              <a href="#">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2876 4.93536C17.6921 5.19154 17.0441 5.37591 16.3765 5.44771C17.0696 5.03713 17.5886 4.38847 17.8361 3.62343C17.1858 4.00923 16.4734 4.27975 15.7304 4.42301C15.4199 4.09198 15.0444 3.82826 14.6272 3.64829C14.21 3.46832 13.7601 3.37596 13.3056 3.37696C11.4665 3.37696 9.98744 4.86356 9.98744 6.68784C9.98744 6.94401 10.0186 7.20019 10.0692 7.44666C7.31542 7.30305 4.85942 5.99112 3.22663 3.98247C2.92912 4.48922 2.77321 5.06622 2.77513 5.65343C2.77513 6.80234 3.36092 7.8154 4.25418 8.4112C3.72777 8.39053 3.21368 8.24624 2.75373 7.99006V8.03082C2.75373 9.63968 3.89415 10.973 5.41407 11.2796C5.12869 11.3535 4.83511 11.3913 4.54026 11.3922C4.32424 11.3922 4.1199 11.3708 3.91361 11.3417C4.33397 12.6536 5.55808 13.6065 7.01572 13.6376C5.8753 14.5284 4.44685 15.0524 2.89579 15.0524C2.6175 15.0524 2.36061 15.0427 2.09399 15.0116C3.56526 15.9529 5.31092 16.4963 7.19087 16.4963C13.2939 16.4963 16.6334 11.4543 16.6334 7.07792C16.6334 6.93431 16.6334 6.7907 16.6237 6.64708C17.2698 6.17549 17.8361 5.59133 18.2876 4.93536Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* instagram */}
              <a
                href="
https://www.instagram.com/kraab_system?igsh=ejRneG5iZmxzdTJv"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4474 7.34938C9.01897 7.34938 7.85325 8.51187 7.85325 9.93636C7.85325 11.3609 9.01897 12.5233 10.4474 12.5233C11.8759 12.5233 13.0416 11.3609 13.0416 9.93636C13.0416 8.51187 11.8759 7.34938 10.4474 7.34938ZM18.228 9.93636C18.228 8.86508 18.2377 7.80351 18.1774 6.73417C18.1171 5.4921 17.8329 4.38977 16.9222 3.48151C16.0094 2.57131 14.906 2.28991 13.6605 2.22975C12.5862 2.16958 11.5217 2.17929 10.4494 2.17929C9.37511 2.17929 8.31059 2.16958 7.23828 2.22975C5.99276 2.28991 4.88737 2.57326 3.97659 3.48151C3.06386 4.39171 2.78167 5.4921 2.72134 6.73417C2.66101 7.80545 2.67074 8.86702 2.67074 9.93636C2.67074 11.0057 2.66101 12.0692 2.72134 13.1386C2.78167 14.3806 3.06581 15.483 3.97659 16.3912C4.88932 17.3014 5.99276 17.5828 7.23828 17.643C8.31253 17.7031 9.37706 17.6934 10.4494 17.6934C11.5236 17.6934 12.5882 17.7031 13.6605 17.643C14.906 17.5828 16.0114 17.2995 16.9222 16.3912C17.8349 15.481 18.1171 14.3806 18.1774 13.1386C18.2397 12.0692 18.228 11.0076 18.228 9.93636ZM10.4474 13.9168C8.23858 13.9168 6.45594 12.1391 6.45594 9.93636C6.45594 7.73364 8.23858 5.95594 10.4474 5.95594C12.6563 5.95594 14.4389 7.73364 14.4389 9.93636C14.4389 12.1391 12.6563 13.9168 10.4474 13.9168ZM14.6024 6.72252C14.0867 6.72252 13.6702 6.30721 13.6702 5.79292C13.6702 5.27862 14.0867 4.86331 14.6024 4.86331C15.1181 4.86331 15.5346 5.27862 15.5346 5.79292C15.5347 5.91504 15.5107 6.03599 15.4639 6.14884C15.4171 6.2617 15.3485 6.36424 15.2619 6.45059C15.1753 6.53694 15.0725 6.60541 14.9593 6.65207C14.8461 6.69874 14.7248 6.72268 14.6024 6.72252Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* youtube */}
              <a href="https://www.youtube.com/watch?v=NyBBkh2iEBw">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_434_2506)">
                    <path
                      d="M8.95924 0H7.83828L7.09097 2.85675L6.34366 0H5.09814C5.34725 0.745238 5.59635 1.36627 5.84545 2.11151C6.21911 3.10516 6.46821 3.9746 6.46821 4.47143V7.45238H7.58917V4.47143L8.95924 0ZM11.9485 5.58929V3.72619C11.9485 3.10516 11.8239 2.73254 11.5748 2.35992C11.3257 1.9873 10.9521 1.8631 10.4539 1.8631C9.95565 1.8631 9.582 2.11151 9.33289 2.48413C9.08379 2.73254 8.95924 3.10516 8.95924 3.72619V5.71349C8.95924 6.33452 9.08379 6.70714 9.33289 6.95556C9.582 7.32818 9.95565 7.45238 10.4539 7.45238C10.9521 7.45238 11.3257 7.20397 11.5748 6.83135C11.8239 6.70714 11.9485 6.21032 11.9485 5.58929ZM10.9521 5.8377C10.9521 6.33452 10.8275 6.58294 10.4539 6.58294C10.0802 6.58294 9.95565 6.33452 9.95565 5.8377V3.47778C9.95565 2.98095 10.0802 2.73254 10.4539 2.73254C10.8275 2.73254 10.9521 2.98095 10.9521 3.47778V5.8377ZM15.685 7.45238V1.8631H14.6886V6.08611C14.4395 6.45873 14.3149 6.58294 14.0658 6.58294C13.9413 6.58294 13.8167 6.45873 13.8167 6.33452V1.8631H12.8203V6.21032C12.8203 6.58294 12.8203 6.83135 12.9449 7.07976C12.9449 7.32818 13.194 7.45238 13.5676 7.45238C13.9413 7.45238 14.3149 7.20397 14.6886 6.83135V7.45238H15.685Z"
                      fill="white"
                    />
                    <path
                      d="M16.1827 13.0415C15.8093 13.0415 15.6848 13.2899 15.6848 13.7867V14.2836H16.6805V13.7867C16.6805 13.2899 16.5561 13.0415 16.1827 13.0415Z"
                      fill="white"
                    />
                    <path
                      d="M12.5709 13.0415C12.4464 13.0415 12.1975 13.1657 12.073 13.2899V16.6435C12.1975 16.7677 12.4464 16.8919 12.5709 16.8919C12.8198 16.8919 12.9443 16.6435 12.9443 16.1467V13.7867C12.9443 13.2899 12.8198 13.0415 12.5709 13.0415Z"
                      fill="white"
                    />
                    <path
                      d="M18.6743 10.3089C18.4252 9.43945 17.6779 8.69421 16.9306 8.69421C14.9378 8.4458 12.8204 8.4458 10.7031 8.4458C8.58568 8.4458 6.59286 8.4458 4.47549 8.69421C3.72818 8.69421 2.98087 9.43945 2.73177 10.3089C2.48267 11.551 2.48267 12.9172 2.48267 14.1593C2.48267 15.4014 2.48267 16.7676 2.73177 18.0097C2.98087 18.8791 3.60363 19.5002 4.47549 19.6244C6.59286 19.8728 8.58568 19.8728 10.7031 19.8728C12.8204 19.8728 14.8133 19.8728 16.9306 19.6244C17.8025 19.5002 18.5498 18.8791 18.6743 18.0097C18.9235 16.7676 18.9235 15.4014 18.9235 14.1593C18.9235 12.9172 18.9235 11.551 18.6743 10.3089ZM7.21562 11.4268H5.9701V17.7613H4.84914V11.4268H3.72818V10.3089H7.21562V11.4268ZM10.2049 17.7613H9.20844V17.1402C8.83479 17.6371 8.46113 17.7613 8.08748 17.7613C7.71382 17.7613 7.58927 17.6371 7.46472 17.3887C7.46472 17.2645 7.34017 17.016 7.34017 16.5192V12.172H8.33658V16.5192C8.33658 16.6434 8.46113 16.7676 8.58568 16.7676C8.83479 16.7676 8.95934 16.6434 9.20844 16.2708V12.172H10.2049V17.7613ZM13.9414 16.0224C13.9414 16.5192 13.9414 16.8918 13.8168 17.1402C13.6923 17.5129 13.4432 17.7613 13.0695 17.7613C12.6959 17.7613 12.3222 17.5129 12.0731 17.1402V17.6371H11.0767V10.3089H12.0731V12.6688C12.4468 12.2962 12.6959 12.0478 13.0695 12.0478C13.4432 12.0478 13.6923 12.2962 13.8168 12.6688C13.9414 12.9172 13.9414 13.2898 13.9414 13.7867V16.0224ZM17.6779 15.1529H15.6851V16.1466C15.6851 16.6434 15.8097 16.8918 16.1833 16.8918C16.4324 16.8918 16.557 16.7676 16.6815 16.5192V15.8982H17.6779V16.6434C17.6779 16.8918 17.5534 17.016 17.4288 17.2645C17.1797 17.6371 16.8061 17.8855 16.1833 17.8855C15.6851 17.8855 15.3115 17.6371 14.9378 17.2645C14.6887 17.016 14.5642 16.5192 14.5642 16.0224V14.1593C14.5642 13.5383 14.6887 13.1656 14.8133 12.9172C15.0624 12.5446 15.436 12.2962 16.0588 12.2962C16.557 12.2962 16.9306 12.5446 17.1797 12.9172C17.4288 13.1656 17.4288 13.6625 17.4288 14.1593V15.1529H17.6779Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_434_2506">
                      <rect
                        width="19.9282"
                        height="19.873"
                        fill="white"
                        transform="translate(0.73877)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="link">
              <div className="link__title">SHOPPING</div>
              <ul className="link__list">
                <li>
                  <a href="#" className="link__item">
                    Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="link__item">
                    Reviews
                  </a>
                </li>
                <li>
                  <NavLink to="account/account" className="link__item">
                    Personal account
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="link">
              <div className="link__title">MORE link</div>
              <ul className="link__list">
                <li>
                  <NavLink to="blog" className={setActive}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="basket" className={setActive}>
                    Shopping cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="favorites" className={setActive}>
                    Favorites
                  </NavLink>
                </li>
                <li>
                  <NavLink to="about-us" className={setActive}>
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__blog blog">
            <div className="blog__title title">FROM THE BLOG</div>

            <div className="blog__items">
              <div className="blog__item">
                <div className="blog__item-title">
                  26 <span>May</span>
                </div>
                <div className="blog__item-text">
                  Posting the results of the latest project for a large
                  enterprise!
                </div>
                <div className="blog__item-comments">3 comments</div>
              </div>
              <div className="blog__item">
                <div className="blog__item-title">
                  27 <span>May</span>
                </div>
                <div className="blog__item-text">
                  Posting the results of the latest project for a large
                  enterprise!
                </div>
                <div className="blog__item-comments">3 comments</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__right">
          KRAAB_SYSTEM © – All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
