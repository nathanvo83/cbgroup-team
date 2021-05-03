import React from "react";
import { Link } from "react-router-dom";

const BurgerSubItem = ({ text, link }) => {
  return (
    <Link className="burgerbar-link" to={link}>
      <div className="burgerbar-subitem">{text}</div>
    </Link>
  );
};

export default BurgerSubItem;
