import React, { useState, useEffect } from 'react';
import './Snackbar.scss';

const Snackbar = ({ message, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            setExiting(false); // Убедитесь, что компонент не находится в процессе выхода

            // Устанавливаем таймер для скрытия Snackbar
            const timer = setTimeout(() => {
                setExiting(true); // Начинаем процесс выхода
                setTimeout(() => {
                    setVisible(false);
                    if (onClose) onClose(); // Вызываем функцию обратного вызова после закрытия
                }, 300); // Задержка должна соответствовать времени анимации выхода
            }, duration);

            return () => clearTimeout(timer);
        } else {
            setExiting(false); // Убедитесь, что процесс выхода прерван, если сообщение очищено
        }
    }, [message, duration, onClose]);

    if (!visible && !exiting) return null;

    return (
        <div className={`snackbar ${visible ? 'enter' : ''} ${exiting ? 'exit' : ''}`}>
            <span className="snackbar-message">{message}</span>
            <button className="snackbar-close" onClick={() => setExiting(true)}>
                &times;
            </button>
        </div>
    );
};

export default Snackbar;
