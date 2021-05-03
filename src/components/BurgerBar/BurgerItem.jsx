import { useState } from "react";
import BurgerSubItem from "./BurgerSubItem";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const BurgerItem = ({ text, link, subs }) => {
  console.log("subs", subs);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const renderSubItem = (subs) => {
    return subs !== undefined && isOpen
      ? subs.map((subItem) => (
          <BurgerSubItem
            key={subItem.text}
            text={subItem.text}
            link={subItem.link}
          ></BurgerSubItem>
        ))
      : "";
  };

  const renderItem = (text, link) => {
    return link === "" ? (
      <Link className="burgerbar-link">
        <div className="burgerbar-item" onClick={() => isOpenHandler()}>
          <div className="text">{text}</div>
          <div className="icon">
            {subs !== undefined ? (
              isOpen ? (
                <FaAngleDown />
              ) : (
                <FaAngleRight />
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    ) : (
      <Link className="burgerbar-link" to={link}>
        <div className="burgerbar-item" onClick={() => isOpenHandler()}>
          <div className="text">{text}</div>
          <div className="icon">
            {subs !== undefined ? (
              isOpen ? (
                <FaAngleDown />
              ) : (
                <FaAngleRight />
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      {renderItem(text, link)}
      {renderSubItem(subs)}
    </div>
  );
};

export default BurgerItem;
