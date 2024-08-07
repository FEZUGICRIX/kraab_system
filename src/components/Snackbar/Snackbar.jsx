import React, { useState, useEffect } from 'react';
import './Snackbar.scss';

const Snackbar = ({ message, duration = 2000, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setExiting(false);

      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          if (onClose) onClose();
        }, 300);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setExiting(false);
    }
  }, [message, duration, onClose]);

  if (!visible && !exiting) return null;

  return (
    <div
      className={`snackbar ${visible ? 'enter' : ''} ${
        exiting ? 'exit' : ''
      }`}
    >
      <span className="snackbar-message">{message}</span>
      <button className="snackbar-close" onClick={() => setExiting(true)}>
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
