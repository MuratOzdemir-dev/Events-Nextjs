import Image from "next/image";
import EventLogisticsItem from "./EventLogisticsItem";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";

const EventLogistics = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(", ", "\n");

  return (
    <section className="shadow-lg rounded-md bg-[#2b2b2b] p-8 max-w-3xl w-4/5 -my-12 mx-auto text-[#d5eeeb] flex justify-between gap-4 flex-col items-center md:flex-row md:-my-20 md:gap-12 md:items-stretch">
      <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full md:w-80 md:h-80">
        <Image src={`${image}`} alt={imageAlt} width={640} height={640} />
      </div>
      <ul className="flex flex-col items-center justify-center gap-8 flex-[3] md:items-start">
        <EventLogisticsItem icon={DateIcon}>
          <p>{humanReadableDate}</p>
        </EventLogisticsItem>
        <EventLogisticsItem icon={AddressIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </EventLogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
