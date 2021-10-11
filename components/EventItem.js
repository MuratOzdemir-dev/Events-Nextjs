import Link from "next/link";

const EventItem = (props) => {
  const { image, title, date, location, id } = props.event;
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className="flex flex-col gap-4 m-4 overflow-hidden bg-white rounded-lg shadow md:flex-row md:gap-0">
      <img src={image} alt={title} className="object-cover w-full md:h-full" />
      <div className="w-full px-4 text-center">
        <div>
          <h2 className="my-2 text-xl font-semibold text-left">{title}</h2>
          <div className="flex items-center gap-2">
            <p className="text-[#666666] font-bold">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <address className="my-2 text-[#666666] whitespace-pre text-left">
              {formattedLocation}
            </address>
          </div>
          <div className="flex flex-row-reverse p-4">
            <Link href={exploreLink}>
              <a className="block">Links</a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
