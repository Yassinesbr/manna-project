import { createContext, useState } from "react";
import Notification from "../components/Notification";
import PropTypes from "prop-types";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
