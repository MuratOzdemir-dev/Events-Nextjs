import { useState, useEffect, useContext } from "react";
import axios from "axios";

import NotificationCtx from "../../store/notificationCtx";

import CommentList from "./CommentList";
import NewComment from "./NewComment";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  const context = useContext(NotificationCtx);
  const { showNotification, hideNotification } = context;

  useEffect(() => {
    if (showComments) {
      try {
        setCommentsLoading(true);
        axios.get(`/api/comments/${eventId}`).then((response) => {
          setComments(response.data.comments);
        });
        setCommentsLoading(false);
      } catch (error) {
        setComments([]);
        setShowComments(false);
        setCommentsLoading(false);
        console.log(error);
      }
    }
  }, [showComments]);

  const toggleCommentsHandler = async () => {
    setShowComments((prevState) => !prevState);
  };

  const addCommentHandler = async (commentData) => {
    try {
      showNotification({
        title: "Sending Comment...",
        message: "",
        status: "pending",
      });
      const response = await axios.post(
        `/api/comments/${eventId}`,
        commentData
      );
      const data = await response.data;
      setComments((prevState) => {
        return [...prevState, data.comment];
      });
      showNotification({
        title: "Succsess",
        message: "Comment sent successfully.",
        status: "success",
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message: "Failed",
        status: "error",
      });
    }
  };
  if (commentsLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="w-11/12 max-w-2xl mx-auto my-12 text-center">
      <button
        onClick={toggleCommentsHandler}
        className="rounded-md py-2 px-4 bg-transparent text-primary border border-primary cursor-pointer  active:bg-[#dcfff9] hover:bg-[#dcfff9]"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {/* Comments dizisini en son eklenen başta gözükmesi için reverse() işlemi uygulandı */}
      {showComments && <CommentList items={comments} />}
    </section>
  );
};

export default Comments;
