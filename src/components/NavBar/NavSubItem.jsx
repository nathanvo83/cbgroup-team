import React from "react";
import { Link } from "react-router-dom";

const NavSubItem = ({ text, link }) => {
  return (
    <Link className="navbar-link" to={link}>
      <div className="subitem">{text}</div>
    </Link>
  );
};

export default NavSubItem;
