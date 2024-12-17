import React from "react";

function ArticleBlock({ article }) {
  return (
    <article>
      <div className="article-img">
        <img src={article.article_img_url} alt="Football players" />
      </div>
      <div className="article-info">
        <div className="article-topic">
          <h3>{article.topic}</h3>
        </div>
        <div className="article-comments">
          <img src="/comment.svg" alt="comment" />
          <p>{article.comment_count}</p>
        </div>
      </div>
      <div className="article-block">
        <h2>{article.title}</h2>
        <p>
          by <span>{article.author}</span>
        </p>
        <p>{article.created_at}</p>
      </div>
    </article>
  );
}

export default ArticleBlock;
