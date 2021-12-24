import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import ErrorAlert from "../../components/ui/ErrorAlert";

const AllEventsPage = ({ events, errorMessage }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  if (errorMessage || !events) {
    return (
      <ErrorAlert>
        <p>{errorMessage}</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      {/* <EventSearch onSearch={findEventsHandler} /> */}
      <EventList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  let errorMessage = "";
  let events = [];

  try {
    const res = await axios.get(`${process.env.FIREBASE_API}/events.json`);
    if (res.statusText === "OK" && res.data) {
      for (const key in res.data) {
        events.push(res.data[key]);
      }
      errorMessage = "";
    } else {
      throw new Error();
    }
  } catch (error) {
    errorMessage = "Data Fetching failed!";
  }

  return {
    props: {
      events,
      errorMessage,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
