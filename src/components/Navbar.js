import { Avatar } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.PNG";
import { Link, animateScroll as Scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="navbar__left"
        onClick={() =>
          Scroll.scrollToTop({
            offset: -30,
            smooth: true,
            duration: 1000,
          })
        }
      >
        <Avatar src={Logo} alt="logo" />
      </div>
      <div className="navbar__right">
        <ul>
          <li>
            <Link to="about" offset={-30} smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" offset={-30} smooth={true} duration={1000}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" offset={-30} smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" offset={-30} smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
