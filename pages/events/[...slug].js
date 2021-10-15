import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummyData";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const params = router.query.slug;
  if (!params) {
    return <p className="text-center">...Loading</p>;
  }
  const [year, month] = params;
  const filteredEvents = getFilteredEvents({ year: +year, month: +month });

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <>
        <ErrorAlert>
          <p className="m-4 text-xl text-center">
            No Events found for the chosen filter!
          </p>
        </ErrorAlert>
        <button className="no-underline flex items-center  cursor-pointer bg-[#03be9f] border border-[#03be9f] rounded-md text-[#dafff7] py-1 px-3 mx-auto text-center shadow-md hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1]">
          Show all Events
        </button>
      </>
    );
  }

  const date = new Date(+year, +month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
