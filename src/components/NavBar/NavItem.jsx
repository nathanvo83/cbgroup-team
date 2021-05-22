import React from "react";
import { FaAngleDown } from "react-icons/fa";

import { Link } from "react-router-dom";
import NavSubItem from "./NavSubItem";

const NavItem = ({ text, link, subs }) => {
  const renderSubItem = (subs) => (
    <div className="content">
      {subs !== undefined
        ? subs.map((sub) => (
            <NavSubItem
              key={sub.text}
              text={sub.text}
              link={sub.link}
            ></NavSubItem>
          ))
        : ""}
    </div>
  );

  const renderItem = (text, link, subs) => {
    return (
      <div className="navbar-item">
        {subs === undefined ? (
          <Link className="navbar-link" to={link}>
            <div className="item">
              <div className="text">{text}</div>
              <div className="icon">
                {subs !== undefined ? <FaAngleDown /> : ""}
              </div>
            </div>
          </Link>
        ) : (
          <div className="navbar-link">
            <div className="item">
              <div className="text">{text}</div>
              {subs !== undefined ? <FaAngleDown /> : ""}
            </div>
          </div>
        )}

        {renderSubItem(subs)}
      </div>
    );
  };

  return renderItem(text, link, subs);
};

export default NavItem;
