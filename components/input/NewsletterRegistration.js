import { useRef, useContext } from "react";
import axios from "axios";
import NotificationCtx from "../../store/notificationCtx";

const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);
  const context = useContext(NotificationCtx);
  const { showNotification, hideNotification } = context;
  const registrationHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    try {
      showNotification({
        title: "Signing up...",
        message: "Registering for newsletter.",
        status: "pending",
      });
      const response = await axios.post("/api/newsletter", {
        email: enteredEmail,
      });

      if (response.statusText === "Created") {
        showNotification({
          title: "Succes!",
          message:
            response.data.message || "Successfully registered for newsletter.",
          status: "success",
        });
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      showNotification({
        title: "Failed",
        message: "Register Failed",
        status: error.response.statusText || "error",
      });
    }
  };

  return (
    <section className="w-11/12 max-w-xs mx-auto my-12">
      <h2 className="text-center">Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className="flex">
          <input
            className="flex-1 p-1 border rounded rounded-tr-none rounded-br-none border-secondary"
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button
            type="submit"
            className="border bg-primary border-primary rounded-md text-[#dafff7] rounded-tl-none rounded-bl-none cursor-pointer active:bg-[#02afa1] hover:bg-[#02afa1] active:border-[#02afa1] hover:border-[#02afa1]"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
