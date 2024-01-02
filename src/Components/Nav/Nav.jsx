import { Link } from "react-router-dom";

// Icons import
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.scss";
import { useState } from "react";

const Nav = () => {
  const [iconsBurger, setIconsBurger] = useState(true);
  const [navList, setNavList] = useState("navbar__list");

  const handleClick = () => {
    if (iconsBurger === true) {
      setIconsBurger(false);
      setNavList("navbar__list active");
    } else {
      setIconsBurger(true);
      setNavList("navbar__list");
    }
  };

  const handleExit = () => {
    if (navList === "navbar__list") {
      setNavList("navbar__list active");
    } else {
      setNavList("navbar__list");
      setIconsBurger(true);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Cédric.</h1>
      <IconContext.Provider value={{ color: "#1b1b1b" }}>
        <div className="navbar__icons" onClick={handleClick}>
          {iconsBurger ? <RxHamburgerMenu /> : <AiOutlineClose />}
        </div>
      </IconContext.Provider>
      <div className={navList}>
        <IconContext.Provider value={{ size: "1.3em" }}>
          <div className="navbar__home">
            <Link className="navbar__link" to={"/"} onClick={handleExit}>
              HOME
            </Link>
          </div>
          <div className="navbar__candidat">
            <Link className="navbar__link" to={"#"} onClick={handleExit}>
              ABOUT
            </Link>
          </div>
          <div className="navbar__contact">
            <Link className="navbar__link" to={"#"} onClick={handleExit}>
              CONTACT
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Nav;
