import { useState } from "react";
import { Routes, Route, useLocation } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Contacts from "./components/Contacts";

import "./App.css";
import SingleArticle from "./components/SingleArticle";

function App() {
  // const { pathname } = useLocation();
  const [articleId, setArticleId] = useState();

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/articles"
              element={
                <Articles articleId={articleId} setArticleId={setArticleId} />
              }
            />
            <Route
              path="/articles/:id"
              element={<SingleArticle articleId={articleId} />}
            />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
