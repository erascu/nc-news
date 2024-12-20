import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ArticleBlock from "./ArticleBlock";
import CommentsBlock from "./CommentsBlock";
import NotFound from "./NotFound";

function SingleArticle({ articleId }) {
  const location = useLocation();
  let thisLocation = "";
  if (location.pathname.includes("/articles/")) {
    thisLocation = location.pathname.replace("/articles/", "");
  }

  const [oneArticle, setOneArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentErr, setCommentErr] = useState("");
  const [costumError, setCostumError] = useState({});

  const isError = Object.keys(costumError).length > 0;

  useEffect(() => {
    setIsLoading(true);
    setCostumError({});
    axios
      .get(
        `https://nc-news-api-qfui.onrender.com/api/articles/${
          articleId || thisLocation
        }`
      )
      .then(({ data }) => {
        setOneArticle(data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setCostumError({
          code: err.status,
          message: "Oops! We couldn’t find the article you're looking for.",
        });
      });

    setIsLoading(true);
    axios
      .get(
        `https://nc-news-api-qfui.onrender.com/api/articles/${
          articleId || thisLocation
        }/comments`
      )
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setCommentErr(err.status);
      });
    setCommentErr("");
  }, [articleId]);

  if (isError) {
    return <NotFound costumError={costumError} />;
  }

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Article</h2>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <ArticleBlock article={oneArticle} />
          {commentErr === 404 ? (
            <>
              <CommentsBlock articleId={thisLocation} />
              <p style={{ textAlign: "center", color: "rgb(115, 115, 115)" }}>
                No comments found for this article
              </p>
            </>
          ) : (
            <CommentsBlock comments={comments} articleId={thisLocation} />
          )}
        </>
      )}
    </>
  );
}

export default SingleArticle;
