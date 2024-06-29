import futuristicImage from './images/futuristic.png';

const Singup = () => {
  return (
    <>
      <section className="futuristic">
        <img
          src={futuristicImage}
          alt="futuristic"
          className="futuristic__image"
        />
      </section>

      <section className="singup">
        <div className="container">
          <div className="singup__container">
            <div className="singup__content">
              <h5 className="singup__title">SING UP FOR THE NEWSLETTER</h5>
              <span className="singup__text">
                Subscribe for the latest stories and promotions
              </span>
            </div>

            <form
              className="singup__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="singup__input"
              />
              <button className="singup__button">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 0H0.75C0.335156 0 0 0.335156 0 0.75V15.75C0 16.1648 0.335156 16.5 0.75 16.5H20.25C20.6648 16.5 21 16.1648 21 15.75V0.75C21 0.335156 20.6648 0 20.25 0ZM19.3125 2.59687V14.8125H1.6875V2.59687L1.04063 2.09297L1.96172 0.909375L2.96484 1.68984H18.0375L19.0406 0.909375L19.9617 2.09297L19.3125 2.59687ZM18.0375 1.6875L10.5 7.54688L2.9625 1.6875L1.95938 0.907031L1.03828 2.09062L1.68516 2.59453L9.69141 8.81953C9.92165 8.99841 10.2049 9.09551 10.4965 9.09551C10.7881 9.09551 11.0713 8.99841 11.3016 8.81953L19.3125 2.59687L19.9594 2.09297L19.0383 0.909375L18.0375 1.6875Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singup;
