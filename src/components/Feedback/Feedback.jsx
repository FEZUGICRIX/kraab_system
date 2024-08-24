import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__container">
        <h4 className="feedback__title account-title">Palaute</h4>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="feedback__form"
        >
          <textarea
            placeholder="Palautteesi..."
            name="feedback"
            id="feedback"
          ></textarea>
          <input id="submit" type="submit" value="Lähetä" className=' ' />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
