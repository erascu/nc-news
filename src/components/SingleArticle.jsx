import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ArticleBlock from "./ArticleBlock";
import CommentsBlock from "./CommentsBlock";

function SingleArticle({ articleId }) {
  const navigate = useNavigate();
  const [oneArticle, setOneArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    articleId > 0 &&
      axios
        .get(`https://nc-news-api-qfui.onrender.com/api/articles/${articleId}`)
        .then(({ data }) => {
          setOneArticle(data.article);
          setIsLoading(false);
        });

    articleId > 0 &&
      axios
        .get(
          `https://nc-news-api-qfui.onrender.com/api/articles/${articleId}/comments`
        )
        .then(({ data }) => {
          setComments(data.comments);
          setIsLoading(false);
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
          <CommentsBlock comments={comments} />
        </>
      )}
    </>
  );
}

export default SingleArticle;
