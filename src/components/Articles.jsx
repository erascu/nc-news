import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { articlesFilter } from "../services/api";

import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ArticleBlock from "./ArticleBlock";
import NotFound from "./NotFound";
import Skeleton from "./Skeleton/Skeleton";

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
              className={
                (sortBy === "created_at" && orderBy === "desc") ||
                (!sortBy && !orderBy)
                  ? "active"
                  : ""
              }
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
              Date
              <img src="/votes-desc.svg" alt="sort descending" />
            </li>
            <li
              className={
                sortBy === "created_at" && orderBy === "asc" ? "active" : ""
              }
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
              Date
              <img src="/votes-asc.svg" alt="sort ascending" />
            </li>
            <li
              className={
                sortBy === "votes" && orderBy === "desc" ? "active" : ""
              }
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
              Votes
              <img src="/votes-desc.svg" alt="votes descending" />
            </li>
            <li
              className={
                sortBy === "votes" && orderBy === "asc" ? "active" : ""
              }
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
              Votes
              <img src="/votes-asc.svg" alt="votes ascending" />
            </li>
          </ul>
          {/* <Select>
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem defaultValue="date_desc">
                <div className="flex items-center">
                  <FaArrowDownWideShort />
                  <p className="ml-[7px]">Date</p>
                </div>
              </SelectItem>
              <SelectItem value="date_asc">
                <div className="flex items-center">
                  <FaArrowDownShortWide />
                  <p className="ml-[7px]">Date</p>
                </div>
              </SelectItem>
              <SelectItem value="votes_desc">
                <div className="flex items-center">
                  <FaArrowDownWideShort />
                  <p className="ml-[7px]">Votes</p>
                </div>
              </SelectItem>
              <SelectItem value="votes_asc">
                <div className="flex items-center">
                  <FaArrowDownShortWide />
                  <p className="ml-[7px]">Votes</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select> */}
        </div>
      )}
      <ul>
        {isLoading
          ? [...new Array(3)].map((_, i) => <Skeleton key={i} />)
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
