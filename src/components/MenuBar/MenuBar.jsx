import React from "react";
// import BurgerBar from "../BurgerBar/BurgerBar";
// import MobileBar from "../MobileBar/MobileBar";
import MobileBarL2R from "../MobileBar/MobileBarL2R";
// import MobileBarNoEffect from "../MobileBar/MobileBarNoEffect";
// import MobileBarR2L from "../MobileBar/MobileBarR2L";
import NavBar from "../NavBar/NavBar";
import { Desktop, Mobile, Tablet } from "../Responsive/Reponsive";
const MenuBar = () => {
  return (
    <div>
      <Mobile>
        <MobileBarL2R></MobileBarL2R>
        {/* <MobileBarNoEffect></MobileBarNoEffect> */}
        {/* <MobileBar></MobileBar> */}
        {/* <BurgerBar></BurgerBar> */}
      </Mobile>

      <Tablet>
        <MobileBarL2R></MobileBarL2R>
        {/* <MobileBarNoEffect></MobileBarNoEffect> */}

        {/* <MobileBar></MobileBar> */}
        {/* <BurgerBar></BurgerBar> */}
      </Tablet>

      <Desktop>
        <NavBar></NavBar>
      </Desktop>
      {/* <NavBar></NavBar> */}
    </div>
  );
};

export default MenuBar;
