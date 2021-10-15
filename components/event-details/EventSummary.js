const EventSummary = (props) => {
  return (
    <section className="w-full h-[30vh] bg-gradient-to-bl from-gradient-from to-gradient-to">
      <h1 className="pt-12 m-0 text-4xl text-center text-white text-shadow-lg md:text-7xl">
        {props.title}
      </h1>
    </section>
  );
};

export default EventSummary;
