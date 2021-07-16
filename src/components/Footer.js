import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>
          No <CopyrightIcon className="copyRight" /> copyright issues.
        </p>
        <p>Feel free to copy.</p>
      </div>
      <div className="footer__mid">
        <span>Manish Bishnoi</span>
        <p>
          Made with <span>❤</span> in India
        </p>
      </div>
      <div className="footer__right">
        <p>You can find me on</p>
        <div className="footer__rightIcons">
          <a
            href="https://github.com/manishbishnoi07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-bishnoi-2868071b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="linkedin" />
          </a>
          <a href="mailto:manishbishnoi897@gmail.com">
            <MailOutlineIcon className="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
