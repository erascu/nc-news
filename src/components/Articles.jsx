import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import ArticleBlock from "./ArticleBlock";
import NotFound from "./NotFound";
import { articlesFilter } from "../services/api";

function Articles({ articleId, setArticleId, setDropMenu }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "",
    order: "",
  });

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    if (sortBy && orderBy) {
      articlesFilter(sortBy, orderBy)
        .then(({ data }) => {
          setArticles(data.articles);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Failed to load sorting. Try again later!");
          setIsLoading(false);
        });
    } else {
      axios
        .get("https://nc-news-api-qfui.onrender.com/api/articles")
        .then(({ data }) => {
          setArticles(data.articles);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Failed to load page. Try again later!");
          setIsLoading(false);
        });
    }
  }, [sortBy, orderBy]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Articles</h2>
      </div>
      {!isLoading && (
        <div className="sortby-block">
          <h3>Sort by:</h3>
          <ul>
            <li
              onClick={() => {
                setSearchParams(
                  (prev) => {
                    prev.set("sort_by", "created_at");
                    return prev;
                  },
                  { replace: true }
                );
                setSearchParams(
                  (prev) => {
                    prev.set("order", "desc");
                    return prev;
                  },
                  { replace: true }
                );
                navigate(`?sort_by=created_at&order=desc`);
              }}
            >
              Date <img src="/votes-desc.svg" alt="sort descending" />
            </li>
            <li
              onClick={() => {
                setSearchParams(
                  (prev) => {
                    prev.set("sort_by", "created_at");
                    return prev;
                  },
                  { replace: true }
                );
                setSearchParams(
                  (prev) => {
                    prev.set("order", "asc");
                    return prev;
                  },
                  { replace: true }
                );
                navigate(`?sort_by=created_at&order=asc`);
              }}
            >
              Date <img src="/votes-asc.svg" alt="sort ascending" />
            </li>
            <li
              onClick={() => {
                setSearchParams(
                  (prev) => {
                    prev.set("sort_by", "votes");
                    return prev;
                  },
                  { replace: true }
                );
                setSearchParams(
                  (prev) => {
                    prev.set("order", "desc");
                    return prev;
                  },
                  { replace: true }
                );
                navigate(`?sort_by=votes&order=desc`);
              }}
            >
              Votes <img src="/votes-desc.svg" alt="votes descending" />
            </li>
            <li
              onClick={() => {
                setSearchParams(
                  (prev) => {
                    prev.set("sort_by", "votes");
                    return prev;
                  },
                  { replace: true }
                );
                setSearchParams(
                  (prev) => {
                    prev.set("order", "asc");
                    return prev;
                  },
                  { replace: true }
                );
                navigate(`?sort_by=votes&order=asc`);
              }}
            >
              Votes <img src="/votes-asc.svg" alt="votes ascending" />
            </li>
          </ul>
        </div>
      )}
      <ul>
        {isLoading
          ? " Loading..."
          : articles.map((article) => (
              <li key={article.article_id}>
                <ArticleBlock
                  article={article}
                  articleId={articleId}
                  setArticleId={setArticleId}
                  setDropMenu={setDropMenu}
                />
              </li>
            ))}
      </ul>
    </>
  );
}

export default Articles;
