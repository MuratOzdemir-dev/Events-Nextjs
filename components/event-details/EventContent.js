const EventContent = (props) => {
  return (
    <section className="text-2xl text-[#3a3a3a] w-11/12 max-w-2xl m-auto mt-32 text-center">
      {props.children}
    </section>
  );
};

export default EventContent;
