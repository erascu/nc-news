import { Routes, Route, useLocation } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Contacts from "./components/Contacts";

import "./App.css";

function App() {
  // const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
