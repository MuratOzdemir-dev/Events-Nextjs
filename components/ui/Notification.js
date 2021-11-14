import { useContext } from "react";

import NotificationCtx from "../../store/notificationCtx";

function Notification(props) {
  const hideNotification = useContext(NotificationCtx).hideNotification;

  const { title, message, status } = props;

  let statusClasses = "";
  const notificationClass =
    "fixed bottom-0 left-0 h-20 w-full flex justify-between items-center text-white py-2 px-[10%] shadow-md";

  if (status === "success") {
    statusClasses = "bg-green-500";
  }

  if (status === "error") {
    statusClasses = "bg-red-500";
  }

  if (status === "pending") {
    statusClasses = "bg-blue-500";
  }

  const activeClasses = `${notificationClass} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2 className="m-0 text-xl text-white">{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
