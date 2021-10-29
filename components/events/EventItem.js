import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const EventItem = (props) => {
  const router = useRouter();
  const { image, title, date, location, id } = props.event;
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  const showDetailHandler = () => {
    router.push(`/events/${id}`);
  };

  return (
    <li className="flex flex-col gap-4 m-4 overflow-hidden bg-white rounded-lg shadow md:flex-row md:gap-0">
      <Image src={image} alt={title} width={640} height={480} />
      <div className="w-full px-4 text-center">
        <div>
          <h2 className="my-2 text-xl font-semibold text-left">{title}</h2>
          <div className="flex items-center gap-2">
            <DateIcon />
            <p className="text-[#666666] font-bold">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <AddressIcon />
            <address className="my-2 text-[#666666] whitespace-pre text-left">
              {formattedLocation}
            </address>
          </div>
          <div
            className="flex flex-row-reverse p-4"
            onClick={showDetailHandler}
          >
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className="inline-flex items-center justify-center ml-2">
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
