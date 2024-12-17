import axios from "axios";
import { useState, useEffect } from "react";
import ArticleBlock from "./ArticleBlock";

function Articles({ articleId, setArticleId }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-news-api-qfui.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Articles</h2>
      </div>
      <ul>
        {isLoading
          ? " Loading..."
          : articles.map((article) => (
              <li key={article.article_id}>
                <ArticleBlock
                  article={article}
                  articleId={articleId}
                  setArticleId={setArticleId}
                />
              </li>
            ))}
      </ul>
    </>
  );
}

export default Articles;
