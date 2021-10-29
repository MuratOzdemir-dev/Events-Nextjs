import Head from "next/head";
import axios from "axios";

import EventList from "../components/events/EventList";
import ErrorAlert from "../components/ui/ErrorAlert";

const HomePage = ({ featuredEvents, errorMessage }) => {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      {errorMessage && (
        <ErrorAlert>
          <p>{errorMessage}</p>
        </ErrorAlert>
      )}
      <EventList items={featuredEvents} />
    </>
  );
};

export const getStaticProps = async () => {
  let errorMessage = "";
  const featuredEvents = [];
  try {
    const res = await axios.get(
      `${process.env.FIREBASE_API}/events.json?orderBy="isFeatured"&equalTo=true`
    );
    if (res.statusText === "OK" && res.data) {
      errorMessage = "";

      const responseData = res.data;

      for (const key in responseData) {
        featuredEvents.push(responseData[key]);
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    errorMessage = "Data fetching failed!";
  }

  return {
    props: {
      featuredEvents,
      errorMessage,
    },
    revalidate: 1800,
  };
};

export default HomePage;
