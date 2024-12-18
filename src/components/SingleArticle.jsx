import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import ArticleBlock from "./ArticleBlock";
import CommentsBlock from "./CommentsBlock";

function SingleArticle({ articleId }) {
  //const navigate = useNavigate();
  const location = useLocation();
  let thisLocation = "";
  if (location.pathname.includes("/articles/")) {
    thisLocation = location.pathname.replace("/articles/", "");
  }

  const [oneArticle, setOneArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentErr, setCommentErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
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
        err;
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
  }, [articleId]);
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
              <CommentsBlock />
              <p style={{ textAlign: "center", color: "rgb(115, 115, 115)" }}>
                No comments found for this article
              </p>
            </>
          ) : (
            <CommentsBlock comments={comments} />
          )}
        </>
      )}
    </>
  );
}

export default SingleArticle;
