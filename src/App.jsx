import { useState } from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Contacts from "./components/Contacts";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  const [articleId, setArticleId] = useState();
  const [dropMenu, setDropMenu] = useState("");

  return (
    <div className="wrapper">
      <Header setDropMenu={setDropMenu} />
      <main>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/articles"
              element={
                <Articles
                  articleId={articleId}
                  setArticleId={setArticleId}
                  setDropMenu={setDropMenu}
                />
              }
            />
            <Route
              path="/articles/:id"
              element={<SingleArticle articleId={articleId} />}
            />
            <Route
              path="/topics/:topic_filter"
              element={
                <Topics
                  dropMenu={dropMenu}
                  articleId={articleId}
                  setArticleId={setArticleId}
                />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
