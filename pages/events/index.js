import { useRouter } from "next/router";

import { getAllEvents } from "../../dummyData";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;
