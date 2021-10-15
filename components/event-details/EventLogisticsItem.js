const LogisticsItem = (props) => {
  const { icon: Icon } = props;
  return (
    <li className="flex flex-col text-2xl items-center text-center text-[#aefff8] md:items-start md:text-left">
      <span className="block mr-4 text-[#18e0d0]">
        <Icon />
      </span>
      <span className="block">{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
