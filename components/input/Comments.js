import { useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevState) => !prevState);
  };

  const addCommentHandler = (commentData) => {
    // Send data to API
  };

  return (
    <section className="w-11/12 max-w-2xl mx-auto my-12 text-center">
      <button
        onClick={toggleCommentsHandler}
        className="rounded-md py-2 px-4 bg-transparent text-primary border border-primary cursor-pointer  active:bg-[#dcfff9] hover:bg-[#dcfff9]"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
