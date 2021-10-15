import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-baseline py-4 px-[10%] h-20 bg-[#202020]">
      <div className="text-2xl h-full flex justify-center items-center text-[#94fdfd] md:text-4xl">
        <Link href="/">
          <a className="text-[#94fdfd]">NextEvents</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a className="text-[#74dacc] md:text-2xl">Browse All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
