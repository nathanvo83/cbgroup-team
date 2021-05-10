import "./BurgerBar.css";
import "@animated-burgers/burger-slip/dist/styles.css";
import { useState } from "react";
import BurgerItem from "./BurgerItem";
import { menuData } from "../../data/menu";
import Burger from "@animated-burgers/burger-slip";

function BurgerBar() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    return (
      <div className="burgerbar-header">
        <div className="text">cbgroup</div>
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
          menuHandler={() => isOpenHandler()}
        ></BurgerItem>
      );
    });

  const renderMenu = () => {
    return isOpen ? (
      <div className="burgerbar burgerbar-open">
        {renderIcon()}
        {renderItem()}
      </div>
    ) : (
      <div className="burgerbar burgerbar-close">{renderIcon()}</div>
    );
  };

  return renderMenu();
}

export default BurgerBar;
