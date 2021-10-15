import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className="w-11/12 max-w-2xl mx-auto my-20">
      {items.map((item) => (
        <EventItem event={item} key={item.id} />
      ))}
    </ul>
  );
};

export default EventList;
