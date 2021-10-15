import { useRef } from "react";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form
      className="flex flex-col justify-between w-11/12 max-w-2xl gap-4 p-4 mx-auto my-8 bg-white rounded-md shadow-lg md:flex-row"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col w-full gap-4 md:w-4/5 md:flex-row">
        <div className="flex items-center justify-between flex-1 gap-4">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select
            id="year"
            ref={yearInputRef}
            className="w-3/4 p-1 bg-white border rounded-md md:w-full"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex items-center justify-between flex-1 gap-4">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select
            id="month"
            ref={monthInputRef}
            className="w-3/4 p-1 bg-white border rounded-md md:w-full"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      <button className="no-underline flex items-center  cursor-pointer bg-[#03be9f] border border-[#03be9f] rounded-md text-[#dafff7] py-1 px-3 text-center shadow-md hover:bg-[#02afa1] hover:border-[#02afa1] active:bg-[#02afa1] active:border-[#02afa1]">
        Find Events
      </button>
    </form>
  );
};

export default EventSearch;
