import React from "react";
import BurgerBar from "../BurgerBar/BurgerBar";
import NavBar from "../NavBar/NavBar";
import { Desktop, Mobile, Tablet } from "../Responsive/Reponsive";
const MenuBar = () => {
  return (
    <div>
      <Mobile>
        <BurgerBar></BurgerBar>
      </Mobile>

      <Tablet>
        <BurgerBar></BurgerBar>
      </Tablet>

      <Desktop>
        <NavBar></NavBar>
      </Desktop>
    </div>
  );
};

export default MenuBar;
