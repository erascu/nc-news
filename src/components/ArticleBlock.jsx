import React from "react";

function ArticleBlock({ article, setArticleId, articleId }) {
  const handleArticleClick = (e) => {
    e.preventDefault();
    setArticleId(article.article_id);
  };

  console.log();

  return (
    <article>
      <div
        className="article-img"
        onClick={article.comment_count ? handleArticleClick : null}
      >
        <img src={article.article_img_url} alt={article.topic} />
      </div>
      <div className="article-info">
        <div className="article-topic">
          <h3>{article.topic}</h3>
        </div>
        <div className={!article.comment_count ? "hidden" : "article-comments"}>
          <img src="/comment.svg" alt="comment" />
          <p>{article.comment_count}</p>
        </div>
      </div>
      <div className="article-block">
        <h2 onClick={article.comment_count ? handleArticleClick : null}>
          {article.title}
        </h2>
        <p>
          by <span>{article.author}</span>
        </p>
        <p>{article.created_at}</p>
        <p className={articleId ? "" : "hidden"}>{article.body}</p>
      </div>
    </article>
  );
}

export default ArticleBlock;
