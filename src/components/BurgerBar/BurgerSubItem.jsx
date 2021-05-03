import React from "react";
import { Link } from "react-router-dom";

const BurgerSubItem = ({ text, link, menuHandler }) => {
  const linkHandler = () => {
    menuHandler();
  };

  return (
    <Link className="burgerbar-link" to={link} onClick={() => linkHandler()}>
      <div className="burgerbar-subitem">{text}</div>
    </Link>
  );
};

export default BurgerSubItem;
