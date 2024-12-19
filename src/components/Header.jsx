import { useState } from "react";
import { Link } from "react-router";

const dropDownMenu = ["Coding", "Cooking", "Football"];

function Header({ setDropMenu }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickMenu = (e) => {
    setOpen(!open);
    setDropMenu(e.target.text);
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
              <div className="dropdown-block">
                <li onClick={handleOpen}>
                  <Link>Topics</Link>
                </li>
                {open && (
                  <div className="dropdown-menu">
                    {dropDownMenu.map((menu) => (
                      <li key={menu}>
                        <Link
                          to={`/topics/${menu.toLowerCase()}`}
                          onClick={handleClickMenu}
                        >
                          {menu}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </div>
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
