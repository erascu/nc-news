import { useState } from "react";
import { Routes, Route, useLocation } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Contacts from "./components/Contacts";
import SingleArticle from "./components/SingleArticle";

import "./App.css";

function App() {
  // const { pathname } = useLocation();
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
              path="/topics"
              element={
                <Topics
                  dropMenu={dropMenu}
                  articleId={articleId}
                  setArticleId={setArticleId}
                />
              }
            >
              <Route path="/topics/coding" element={<Topics />} />
              <Route path="/topics/cooking" element={<Topics />} />
              <Route path="/topics/football" element={<Topics />} />
            </Route>
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
