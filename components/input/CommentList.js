const CommentList = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="py-2 text-left border-b border-secondary">
        <p className="m-0">My comment is amazing!</p>
        <div className="italic text-right">
          By <address className="inline">Maximilian</address>
        </div>
      </li>
      <li className="py-2 text-left border-b border-secondary">
        <p className="m-0">My comment is amazing!</p>
        <div className="italic text-right">
          By <address className="inline">Maximilian</address>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
