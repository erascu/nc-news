import Comment from "./Comment";

function CommentsBlock({ comments }) {
  return (
    <div className="comments-block">
      <h2>Comments</h2>
      <form>
        <label>
          <textarea type="text" placeholder="Write a comment..." />
        </label>
        <button>Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsBlock;
