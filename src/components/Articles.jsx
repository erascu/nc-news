import React from "react";
import ArticleBlock from "./ArticleBlock";

function Articles({ articles }) {
  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Articles</h2>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <ArticleBlock article={article} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Articles;
