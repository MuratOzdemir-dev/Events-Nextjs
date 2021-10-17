import { useRouter } from "next/router";
import axios from "axios";

import EventSummary from "../../components/event-details/EventSummary";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventContent from "../../components/event-details/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";

const EventDetailPage = ({ selectedEvent, errorMessage }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <p className="my-12 text-4xl text-center text-blue-700">Loading...</p>
    );
  }

  if (errorMessage || !selectedEvent) {
    return (
      <ErrorAlert>
        <p>{errorMessage}</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { eventId: "e1" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  let errorMessage = "";
  let selectedEvent = {};
  const { eventId } = context.params;
  try {
    const res = await axios.get(
      `${process.env.FIREBASE_API}/events/${eventId}.json`
    );

    if (res.statusText === "OK" && res.data) {
      selectedEvent = res.data;
      errorMessage = "";
    } else {
      throw new Error();
    }
  } catch (error) {
    errorMessage = "Data Fetching Failed!";
  }

  return {
    props: {
      selectedEvent,
      errorMessage,
    },
    revalidate: 30,
  };
};

// export const getServerSideProps = async (context) => {
//   let errorMessage = "";
//   let selectedEvent = {};
//   const { eventId } = context.params;
//   try {
//     const res = await axios.get(
//       `${process.env.FIREBASE_API}/events/${eventId}.json`
//     );
//     if (res.statusText === "OK" && res.data) {
//       selectedEvent = res.data;
//       errorMessage = "";
//     } else {
//       throw new Error();
//     }
//   } catch (error) {
//     errorMessage = "Event Not Found";
//   }

//   return {
//     props: {
//       selectedEvent,
//       errorMessage,
//     },
//   };
// };

export default EventDetailPage;
