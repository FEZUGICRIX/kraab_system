import TimeLine from '../TimeLine/TimeLine';

const BasketConfirmation = () => {
  return (
    <div>
      <TimeLine step="confirmation" />

      <section className="confirmation">
        <div className="confirmation__container">
          <div className="confirmation__result result">
            <div className="result__container">
              <div className="result__title">Tilaus on vahvistettu</div>

              <div className="result__info">
                Hyviä uutisia! Tilauksesi on hyväksytty. Sähköposti, jossa
                on tiedot, on jo lähetetty sähköpostiisi.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasketConfirmation;
