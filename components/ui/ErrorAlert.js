const ErrorAlert = (props) => {
  return (
    <div className="my-4 mx-auto py-4 px-8 w-11/12 max-w-2xl bg-[#d5bdfc] text-[#38028d] font-bold text-2xl text-center rounded-md">
      {props.children}
    </div>
  );
};

export default ErrorAlert;
