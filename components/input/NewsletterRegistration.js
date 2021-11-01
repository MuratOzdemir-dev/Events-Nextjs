const NewsletterRegistration = () => {
  const registrationHandler = (e) => {
    e.preventDefault();
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  };

  return (
    <section className="w-11/12 max-w-xs mx-auto my-12">
      <h2 className="text-center">Sign up to stay updated!</h2>
      <form>
        <div className="flex">
          <input
            className="flex-1 p-1 border rounded rounded-tr-none rounded-br-none border-secondary"
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button className="border bg-primary border-primary rounded-md text-[#dafff7] rounded-tl-none rounded-bl-none cursor-pointer active:bg-[#02afa1] hover:bg-[#02afa1] active:border-[#02afa1] hover:border-[#02afa1]">
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
