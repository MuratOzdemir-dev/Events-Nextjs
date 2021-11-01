import { useState, useEffect } from "react";
import axios from "axios";

import CommentList from "./CommentList";
import NewComment from "./NewComment";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      axios.get(`/api/comments/${eventId}`).then((response) => {
        setComments(response.data.comments);
      });
    }
  }, [showComments]);

  const toggleCommentsHandler = async () => {
    setShowComments((prevState) => !prevState);
  };

  const addCommentHandler = async (commentData) => {
    try {
      const response = await axios.post(
        `/api/comments/${eventId}`,
        commentData
      );
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
      {showComments && <CommentList items={comments} />}
    </section>
  );
};

export default Comments;
