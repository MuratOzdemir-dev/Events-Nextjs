import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const router = useRouter();
  let year = "";
  let month = "";
  if (router.query.slug) {
    year = router.query?.slug[0];
    month = router.query?.slug[1];
  }

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  // BU SAYFA CLIENT'E API END POINT GONDERDIGI ICIN IPTAL EDILMISTIR.

  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_FIREBASE_API}/events.json`,
  //   fetcher
  // );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push(data[key]);
      }
      setLoadedEvents(events);
    }
  }, [data]);

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${+month}/${+year}.`} />
    </Head>
  );

  if (!loadedEvents) {
    return (
      <>
        {pageHeadData}
        <p className="m-4 text-xl text-center text-blue-700">Loading...</p>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1
    );
  });

  if (filteredEvents.length === 0 || !filteredEvents || error) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p className="m-4 text-xl text-center">
            No Events found for the chosen filter!
          </p>
        </ErrorAlert>
        <Link href="/events">
          <button className="no-underline flex items-center  cursor-pointer bg-[#03be9f] border border-[#03be9f] rounded-md text-[#dafff7] py-1 px-3 mx-auto text-center shadow-md hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1]">
            Show all Events
          </button>
        </Link>
      </>
    );
  }

  const date = new Date(+year, +month - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
