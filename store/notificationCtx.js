import { createContext, useState, useEffect } from "react";

const NotificationCtx = createContext({
  notification: null, //{title, message, status}
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const NotificationCtxProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      (activeNotification && activeNotification?.status === "success") ||
      activeNotification?.status === "error"
    ) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 2000);
    }
    () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  const showNotification = (notificationData) => {
    // NotificationData title, message ve status property içermeli
    setActiveNotification(notificationData);
  };

  const hideNotification = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationCtx.Provider value={context}>
      {props.children}
    </NotificationCtx.Provider>
  );
};

export default NotificationCtx;
