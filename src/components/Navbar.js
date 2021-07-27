import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Navbar.css";
import Logo from "../assets/logo.PNG";
import { Link, animateScroll as Scroll } from "react-scroll";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import CloseIcon from "@material-ui/icons/Close";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const mobileMenu = () => {
    setActive(!active);
    if (!active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const close = () => {
    setActive(false);
    document.body.style.overflow = "auto";
  };

  const handleLogoClick = () => {
    Scroll.scrollToTop({
      offset: -30,
      smooth: true,
      duration: 1000,
    });
    close();
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar__left" onClick={handleLogoClick}>
        <Avatar src={Logo} alt="logo" />
      </div>
      <div className="navbar__right">
        <ul className={`${active === true ? "activeMob" : ""}`}>
          <li className={`${active === true ? "fade" : ""}`}>
            <Link
              onClick={close}
              to="about"
              offset={-30}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className={`${active === true ? "fade" : ""}`}>
            <Link
              onClick={close}
              to="skills"
              offset={-30}
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className={`${active === true ? "fade" : ""}`}>
            <Link
              onClick={close}
              to="projects"
              offset={-30}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className={`${active === true ? "fade" : ""}`}>
            <Link
              onClick={close}
              to="contact"
              offset={-30}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
        <span onClick={mobileMenu}>
          {active === true ? <CloseIcon /> : <MenuTwoToneIcon />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
