import axios from "axios";
import { useState, useEffect } from "react";
import ArticleBlock from "./ArticleBlock";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [articleId, setArticleId] = useState();
  const [oneArticle, setOneArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-news-api-qfui.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });

    articleId > 0 &&
      axios
        .get(`https://nc-news-api-qfui.onrender.com/api/articles/${articleId}`)
        .then(({ data }) => {
          setOneArticle(data.article);
          setIsLoading(false);
        });
  }, [articleId]);

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Articles</h2>
      </div>
      {isLoading ? (
        "Loading..."
      ) : articleId > 0 ? (
        <ArticleBlock article={oneArticle} articleId={articleId} />
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <ArticleBlock
                article={article}
                articleId={articleId}
                setArticleId={setArticleId}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Articles;
