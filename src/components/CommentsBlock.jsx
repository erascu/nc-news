import Comment from "./Comment";
import { useState } from "react";

import { postComment } from "../api";

function CommentsBlock({ comments, articleId }) {
  const [newComment, setNewComment] = useState("");
  const [shortComment, setShortComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const onClickComment = (e) => {
    e.preventDefault();
    if (newComment.length > 15) {
      setLoading(true);
      postComment(articleId, newComment)
        .then(() => {
          setFeedback(
            "Comment posted successfully! Refresh the page to see it."
          );
          setShortComment(false);
          setNewComment("");
        })
        .catch((err) =>
          setFeedback(
            "There was an error posting your comment. Please try again."
          )
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
        <button type="submit">Comment</button>
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
