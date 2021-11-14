import { useContext } from "react";
import NotificationCtx from "../../store/notificationCtx";
import Header from "./Header";
import Notification from "../ui/Notification";

const Layout = (props) => {
  const activeNotification = useContext(NotificationCtx).notification;

  return (
    <>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
