import { useState } from "react";
import { Link } from "react-router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Header({ setDropMenu }) {
  const handleClickMenu = (e) => {
    setDropMenu(e.target.innerText.toLowerCase());
  };

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
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Topics</MenubarTrigger>
                  <MenubarContent>
                    <Link to="/topics/coding" onClick={handleClickMenu}>
                      <MenubarItem>Coding</MenubarItem>
                    </Link>
                    <Link to="/topics/cooking" onClick={handleClickMenu}>
                      <MenubarItem>Cooking</MenubarItem>
                    </Link>
                    <Link to="/topics/football" onClick={handleClickMenu}>
                      <MenubarItem>Football</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
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
