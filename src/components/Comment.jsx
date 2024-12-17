function Comment({ comment }) {
  return (
    <div className="comment-body">
      <div className="comment-info">
        <h3>{comment.author}</h3>
        <p>{comment.created_at}</p>
      </div>
      <div className="comment-text">
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
