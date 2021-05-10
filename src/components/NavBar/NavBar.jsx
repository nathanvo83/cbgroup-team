import "./NavBar.css";
import React from "react";
import { menuData } from "../../data/menu";
import NavItem from "./NavItem";

const NavBar = () => {
  const renderMenu = () =>
    menuData.map((item) => (
      <NavItem text={item.text} link={item.link} subs={item.subs}></NavItem>
    ));

  return (
    <div className="navbar">
      <div className="navbar-content">{renderMenu()}</div>
      <div className="navbar-border-bottom"> </div>
    </div>
  );
};

export default NavBar;
