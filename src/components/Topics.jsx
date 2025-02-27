import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { topicsFilter } from "../services/api";

import ArticleBlock from "./ArticleBlock";
import Skeleton from "./Skeleton/Skeleton";

function Topics({ dropMenu, articleId, setArticleId }) {
  const [topicData, setTopicData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { topic_filter: topicId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    topicsFilter(dropMenu.toLowerCase())
      .then(({ data }) => {
        setTopicData(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Oops! Couldn't Load Content. Please Try Again!");
        setIsLoading(false);
      });
    setError("");
  }, [dropMenu]);

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">
          {topicId.charAt(0).toUpperCase() + topicId.slice(1)}
        </h2>
      </div>
      <ul>
        {isLoading
          ? [...new Array(3)].map((_, i) => <Skeleton key={i} />)
          : error
          ? error
          : topicData.map((topic) => (
              <li key={topic.article_id}>
                <ArticleBlock
                  article={topic}
                  articleId={articleId}
                  setArticleId={setArticleId}
                />
              </li>
            ))}
      </ul>
    </>
  );
}

export default Topics;
