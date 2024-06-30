import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__container">
        <h4 className="feedback__title account-title">Feedback</h4>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="feedback__form"
        >
          <textarea
            placeholder="Your feedback..."
            name="feedback"
            id="feedback"
          ></textarea>
          <input id="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
