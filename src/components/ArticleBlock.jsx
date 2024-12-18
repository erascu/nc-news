import { useState } from "react";
import { useNavigate } from "react-router";

import { increaseVote, decreaseVote } from "../api";

function ArticleBlock({ article, setArticleId, articleId }) {
  const [votes, setVotes] = useState(0);
  const navigate = useNavigate();

  const handleArticleClick = (e) => {
    e.preventDefault();
    setArticleId(article.article_id);
    navigate(`/articles/${article.article_id}`);
  };

  const handleClickPlus = () => {
    increaseVote(article.article_id).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      alert(
        "We couldn't process your vote at the moment. Please try again later."
      );
    });
    setVotes((currVotes) => currVotes + 1);
  };

  const handleClickMinus = () => {
    if (article.votes + votes > 0) {
      decreaseVote(article.article_id).catch(() => {
        setVotes((currVotes) => currVotes + 1);
        alert(
          "We couldn't process your vote at the moment. Please try again later."
        );
      });
      setVotes((currVotes) => currVotes - 1);
    }
  };

  return (
    <>
      <article>
        <div
          className="article-img"
          onClick={article.body ? null : handleArticleClick}
        >
          <img src={article.article_img_url} alt={article.topic} />
        </div>
        <div className="article-info">
          <div className="article-topic">
            <h3>{article.topic}</h3>
          </div>
          <div className="article-action">
            <div
              className={article.body ? "hidden" : "article-comments"}
              onClick={handleArticleClick}
            >
              <img src="/comment.svg" alt="comment" />
              <p>{article.comment_count}</p>
            </div>
            <div className="article-vote">
              <button onClick={handleClickPlus}>+</button>
              <div className="vote-number">
                <p>
                  {isNaN(article.votes) || isNaN(votes)
                    ? 0
                    : article.votes + votes}
                </p>
              </div>
              <button onClick={handleClickMinus}>-</button>
            </div>
          </div>
        </div>
        <div className="article-block">
          <h2 onClick={article.body ? null : handleArticleClick}>
            {article.title}
          </h2>
          <p>
            by <span>{article.author}</span>
          </p>
          <p>{article.created_at}</p>
          <p className={article.body ? "" : "hidden"}>{article.body}</p>
        </div>
      </article>
    </>
  );
}

export default ArticleBlock;
