import { useState, useEffect } from "react";
import { topicsFilter } from "../services/api";
import ArticleBlock from "./ArticleBlock";

function Home({ articleId, setArticleId, setDropMenu }) {
  const [keepData, setKeepData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      topicsFilter("coding"),
      topicsFilter("cooking"),
      topicsFilter("football"),
    ])
      .then(([coding, cooking, football]) => {
        const threeTopics = [
          coding.data.articles[0],
          cooking.data.articles[0],
          football.data.articles[0],
        ];
        setKeepData(threeTopics);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.status));
  }, []);

  return (
    <>
      <div className="content-block">
        <h2 className="content-title">Headlines</h2>
      </div>
      <ul>
        {isLoading
          ? "Loading"
          : keepData.map((topic) => (
              <li key={topic.article_id}>
                <ArticleBlock
                  article={topic}
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

export default Home;
