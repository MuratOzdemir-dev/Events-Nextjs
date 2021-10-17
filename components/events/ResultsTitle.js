import Button from "../ui/Button";

const ResultsTitle = ({ date }) => {
  const readableDate = new Date(date).toLocaleDateString("tr-TR", {
    month: "long",
    year: "numeric",
  });
  return (
    <section className="w-11/12 max-w-2xl mx-auto my-8 text-center">
      <h1 className="m-6 text-2xl font-bold">
        Events in <span className="italic underline">{readableDate}</span>
      </h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
