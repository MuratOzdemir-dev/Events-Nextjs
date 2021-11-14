const CommentList = ({ items }) => {
  return (
    <ul className="flex flex-col-reverse gap-4">
      {items.map((item) => (
        <li className="py-2 text-left border-b border-secondary" key={item.id}>
          <p className="m-0">{item.text}</p>
          <div className="italic text-right">
            By <span className="inline italic">{item.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
