import { useState } from "react";
import "./BurgerBar.css";
import BurgerItem from "./BurgerItem";
import { menuData } from "../../data/menu";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
// import BurgerSubItem from "./BurgerSubItem";

function BurgerBar() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    return (
      <div className="burgerbar-header">
        <div className="text">CBGROUP</div>
        <div className="icon">
          <Burger isOpen={isOpen} onClick={() => isOpenHandler()}></Burger>
        </div>
      </div>
    );
  };

  const renderItem = () =>
    menuData.map((item) => {
      return (
        <BurgerItem
          key={item.text}
          text={item.text}
          link={item.link}
          subs={item.subs}
        ></BurgerItem>
      );
    });

  const renderMenu = () => {
    return isOpen ? (
      <div className="burgerbar">
        {renderIcon()}
        {renderItem()}
      </div>
    ) : (
      <div className="burgerbar">{renderIcon()}</div>
    );
  };

  return renderMenu();
}

export default BurgerBar;
