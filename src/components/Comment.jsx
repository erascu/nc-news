import { useState } from "react";
import { deleteComment } from "../services/api";
import { formattedDate } from "../utils/dateUtils";

function Comment({ comment }) {
  const [fakeRemove, setFakeRemove] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickDelete = (e) => {
    e.preventDefault();
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setFakeRemove(true);
      })
      .catch((err) => {
        setFakeRemove(false);
        setErrorMessage("Error... Please try again!");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div className={fakeRemove ? "hidden" : "comment-body"}>
      <div className="comment-info-body">
        <div className="comment-info">
          <h3>{comment.author}</h3>
          <p>{formattedDate(comment.created_at)}</p>
          {comment.author === "weegembump" && (
            <p
              className={isDeleting || errorMessage ? "" : "hidden"}
              style={{ color: "red" }}
            >
              {isDeleting ? "Deleting..." : errorMessage}
            </p>
          )}
        </div>
        {comment.author === "weegembump" && (
          <button className="comment-btn" onClick={onClickDelete}>
            delete
          </button>
        )}
      </div>
      <div className="comment-text">
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
