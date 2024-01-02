import { Link } from "react-router-dom";

// Icons import
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.scss";
import { useState } from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Cédric F.</h1>
    </nav>
  );
};

export default Nav;
