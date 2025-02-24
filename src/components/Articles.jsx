import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { articlesFilter } from "../services/api";

import { FaArrowDownWideShort, FaArrowUpWideShort } from "react-icons/fa6";

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
  const [selectedValue, setSelectedValue] = useState("date_desc");
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "",
    order: "",
  });

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

  const handleValueChange = (value) => {
    let sortBy = "";
    let orderBy = "";

    // Update sortBy and orderBy based on the selected value
    switch (value) {
      case "date_desc":
        sortBy = "created_at";
        orderBy = "desc";
        break;
      case "date_asc":
        sortBy = "created_at";
        orderBy = "asc";
        break;
      case "votes_desc":
        sortBy = "votes";
        orderBy = "desc";
        break;
      case "votes_asc":
        sortBy = "votes";
        orderBy = "asc";
        break;
      default:
        return;
    }

    // Update the query parameters and navigate
    setSearchParams(
      (prev) => {
        prev.set("sort_by", sortBy);
        prev.set("order", orderBy);
        return prev;
      },
      { replace: true }
    );

    setSelectedValue(value);
  };

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

      if (sortBy === "created_at" && orderBy === "desc") {
        setSelectedValue("date_desc");
      } else if (sortBy === "created_at" && orderBy === "asc") {
        setSelectedValue("date_asc");
      } else if (sortBy === "votes" && orderBy === "desc") {
        setSelectedValue("votes_desc");
      } else if (sortBy === "votes" && orderBy === "asc") {
        setSelectedValue("votes_asc");
      }
    } else {
      axios
        .get("https://nc-news-api-qfui.onrender.com/api/articles")
        .then(({ data }) => {
          setArticles(data.articles);
          setSelectedValue("date_desc");
          setIsLoading(false);
        })
        .catch(() => {
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
      {isLoading && (
        <div className="sortby-block">
          <div className="flex items-center">
            <div className="w-[47px] h-[21px] skeleton-pulse"></div>
            <div className="w-[130px] h-[35px] skeleton-pulse ml-[10px]"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="sortby-block">
          <h3>Sort by:</h3>
          <Select value={selectedValue} onValueChange={handleValueChange}>
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date_desc">
                <div className="flex items-center">
                  <FaArrowDownWideShort />
                  <p className="ml-[7px]">Date</p>
                </div>
              </SelectItem>
              <SelectItem value="date_asc">
                <div className="flex items-center">
                  <FaArrowUpWideShort />
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
                  <FaArrowUpWideShort />
                  <p className="ml-[7px]">Votes</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
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
