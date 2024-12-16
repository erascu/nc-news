import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-block">
          <Link className="logo-block" to="/">
            <img src="/nc-logo.png" alt="nc news logo" />
            <h1>NC News</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <img src="/user.svg" alt="user" />
            <p>weegembump</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
