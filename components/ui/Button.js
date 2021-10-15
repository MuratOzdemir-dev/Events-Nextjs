import Link from "next/link";
const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className="no-underline flex items-center  cursor-pointer bg-[#03be9f] border border-[#03be9f] rounded-md text-[#dafff7] py-2 px-6 text-center shadow-md hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1]">
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
