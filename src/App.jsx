import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Contacts from "./components/Contacts";

import "./App.css";

function App() {
  // const { pathname } = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-news-api-qfui.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home articles={articles} />} />
            <Route
              path="/articles"
              element={<Articles articles={articles} isLoading={isLoading} />}
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
