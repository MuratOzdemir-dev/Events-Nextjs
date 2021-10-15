import { useRouter } from "next/router";
import EventSummary from "../../components/event-details/EventSummary";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventContent from "../../components/event-details/EventContent";

import { getEventById } from "../../dummyData";
import ErrorAlert from "../../components/ui/ErrorAlert";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const currentEvent = getEventById(eventId);

  if (!currentEvent) {
    return (
      <ErrorAlert>
        <p>Event Not Found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={currentEvent.title} />
      <EventLogistics
        date={currentEvent.date}
        address={currentEvent.location}
        image={currentEvent.image}
        imageAlt={currentEvent.title}
      />
      <EventContent>
        <p>{currentEvent.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
