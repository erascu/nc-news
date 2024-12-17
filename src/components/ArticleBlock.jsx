import React from "react";
import { useNavigate } from "react-router";

function ArticleBlock({ article, setArticleId, articleId }) {
  const navigate = useNavigate();

  const handleArticleClick = (e) => {
    e.preventDefault();
    setArticleId(article.article_id);
    navigate(`/articles/${article.article_id}`);
  };

  return (
    <>
      <article>
        <div className="article-img" onClick={handleArticleClick}>
          <img src={article.article_img_url} alt={article.topic} />
        </div>
        <div className="article-info">
          <div className="article-topic">
            <h3>{article.topic}</h3>
          </div>
          <div
            className={article.body ? "hidden" : "article-comments"}
            onClick={handleArticleClick}
          >
            <img src="/comment.svg" alt="comment" />
            <p>{article.comment_count}</p>
          </div>
        </div>
        <div className="article-block">
          <h2 onClick={handleArticleClick}>{article.title}</h2>
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
