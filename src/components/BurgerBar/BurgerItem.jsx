import { useState } from "react";
import BurgerSubItem from "./BurgerSubItem";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const BurgerItem = ({ text, link, subs, menuHandler }) => {
  console.log("subs", subs);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    if (subs === undefined) {
      menuHandler();
    }
    setIsOpen(!isOpen);
  };

  const renderSubItem = (subs) => {
    return subs !== undefined && isOpen
      ? subs.map((subItem) => (
          <BurgerSubItem
            key={subItem.text}
            text={subItem.text}
            link={subItem.link}
            menuHandler={menuHandler}
          ></BurgerSubItem>
        ))
      : "";
  };

  const renderItem = (text, link, hasSubItem) => {
    return hasSubItem ? (
      <Link className="burgerbar-link">
        <div className="burgerbar-item" onClick={() => isOpenHandler()}>
          <div className="text">{text}</div>
          <div className="icon">
            {hasSubItem ? isOpen ? <FaAngleDown /> : <FaAngleRight /> : ""}
          </div>
        </div>
      </Link>
    ) : (
      <Link className="burgerbar-link" to={link}>
        <div className="burgerbar-item" onClick={() => isOpenHandler()}>
          <div className="text">{text}</div>
          <div className="icon">
            {hasSubItem ? isOpen ? <FaAngleDown /> : <FaAngleRight /> : ""}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      {renderItem(text, link, subs !== undefined)}
      {renderSubItem(subs)}
    </div>
  );
};

export default BurgerItem;
