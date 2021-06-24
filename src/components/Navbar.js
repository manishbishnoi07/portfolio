import { Avatar } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.PNG";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3>
          <a href="#">
            <Avatar src={Logo} alt="logo" />
          </a>
        </h3>
      </div>
      <div className="navbar__right">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
