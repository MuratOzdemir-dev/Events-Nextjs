import { useRef, useState } from "react";

const NewComment = ({ onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const commentInputRef = useRef(null);

  const sendCommentHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  };

  return (
    <form className="w-full p-4 mx-auto my-8 rounded-md shadow-sm bg-primary">
      <div className="flex flex-wrap gap-4">
        <div className="mb-2 flex-1 min-w-[10rem]">
          <label
            htmlFor="email"
            className="block mb-2 font-bold text-left text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            className="p-1 rounded border border-secondary w-full bg-[#dcfff9]"
          />
        </div>
        <div className="mb-2 flex-1 min-w-[10rem]">
          <label
            htmlFor="name"
            className="block mb-2 font-bold text-left text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            className="p-1 rounded border border-secondary w-full bg-[#dcfff9]"
          />
        </div>
      </div>
      <div className="mb-2 flex-1 min-w-[10rem]">
        <label
          htmlFor="comment"
          className="block mb-2 font-bold text-left text-white"
        >
          Your Comment
        </label>
        <textarea
          rows="5"
          id="comment"
          ref={commentInputRef}
          className="p-1 rounded border border-secondary w-full bg-[#dcfff9] resize-none"
        />
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className="p-1 bg-white">Submit</button>
    </form>
  );
};

export default NewComment;
