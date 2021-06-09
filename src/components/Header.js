import React from "react";
import "./Header.css";
const Header = ({ title, subHeading }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <p>{subHeading}</p>
    </div>
  );
};

export default Header;
