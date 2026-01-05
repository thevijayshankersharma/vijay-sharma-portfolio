import React, { createContext, useContext, useState, useCallback } from 'react';
import './VisaNotification.css';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = useCallback((type, message, subtext) => {
        setNotification({ type, message, subtext });
        // Sound effect could go here
        setTimeout(() => {
            setNotification(null);
        }, 4000);
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && (
                <div className={`visa-notification-container show`}>
                    <div className={`visa-card ${notification.type}`}>
                        <div className="visa-header">
                            <span className="visa-icon">♠️</span>
                            <span className="visa-title">SYSTEM NOTIFICATION</span>
                        </div>
                        <div className="visa-body">
                            <h3 className="visa-message">{notification.message}</h3>
                            <p className="visa-subtext">{notification.subtext}</p>
                        </div>
                        <div className="visa-footer">
                            STATUS: <span className="visa-days">{notification.type === 'success' ? 'SENT' : 'ERROR'}</span>
                        </div>
                    </div>
                </div>
            )}
        </NotificationContext.Provider>
    );
};
