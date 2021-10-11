import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/EventList";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <main>
      <EventList items={featuredEvents} />
    </main>
  );
};

export default HomePage;
