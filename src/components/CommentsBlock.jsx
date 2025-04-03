import Comment from "./Comment";
import { useState, useEffect } from "react";

import { postComment } from "../services/api";

function CommentsBlock({ comments, articleId }) {
  const [newComment, setNewComment] = useState("");
  const [shortComment, setShortComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const [fakeComment, setFakeComment] = useState([]);

  useEffect(() => {
    setFakeComment(comments);
  }, [fakeComment]);

  const onClickComment = (e) => {
    e.preventDefault();
    if (newComment.length > 15) {
      // setLoading(true);
      // let fakePost = {
      //   comment_id: Math.floor(Math.random() * 9999) + 1000,
      //   author: "weegembump",
      //   body: newComment,
      //   created_at: new Date().toISOString(),
      // };
      // setFakeComment((prevComments) => [fakePost, ...prevComments]);
      // console.log(fakeComment);
      // setLoading(false);
      // setFakeComment(
      //   (fakeComment.body = newComment),
      //   (fakeComment.created_at = new Date().toISOString()),
      //   (fakeComment.comment_id = Math.floor(Math.random() * 9999) + 1000)
      // );
      // comments.unshift(fakeComment);
      postComment(articleId, newComment)
        .then(() => {
          setFeedback("Comment posted successfully!");
          setFakeComment((prevComments) => [fakePost, ...prevComments]);
          setShortComment(false);
          setNewComment("");
          // comments.unshift(fakeComment);
        })
        .catch((err) =>
          setFeedback("Comment submission failed. Please try again.")
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      setShortComment(true);
      setFeedback("Comment too short. Tell us more.");
    }
  };

  const onHandleChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="comments-block">
      <h2>Comments</h2>
      <form onSubmit={onClickComment}>
        <label>
          <textarea
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={onHandleChange}
            className={shortComment ? "comment-input" : ""}
          />
        </label>
        <p
          className={
            shortComment || feedback
              ? feedback.includes("success")
                ? "alert-green"
                : "comment-alert"
              : "hidden"
          }
        >
          {loading ? "Posting..." : feedback}
        </p>
        <button className="submit-btn" type="submit">
          Comment
        </button>
      </form>
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_id}>
              <Comment comment={comment} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CommentsBlock;
