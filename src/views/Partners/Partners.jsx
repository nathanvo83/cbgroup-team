import React from "react";
import "./Partners.css";
import carternz from "../../assets/images/Partners/carternz.png";
import placemarkers from "../../assets/images/Partners/placemakers.jpg";
import nzcb from "../../assets/images/Partners/NZCB.png";
import engeo from "../../assets/images/Partners/engeo.png";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";

function Partners() {
  const renderCol1 = () => {
    return (
      <div>
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
        <img className="image" src={engeo} alt="engeo" />
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
      </div>
    );
  };

  const renderCol2 = () => {
    return (
      <div>
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
        <img className="image" src={engeo} alt="engeo" />
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
      </div>
    );
  };

  const renderCol3 = () => {
    return (
      <div>
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
        <img className="image" src={engeo} alt="engeo" />
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
      </div>
    );
  };

  const renderCol4 = () => {
    return (
      <div>
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
        <img className="image" src={engeo} alt="engeo" />
        <img className="image" src={carternz} alt="carternz" />
        <img className="image" src={nzcb} alt="nzcb" />
        <img className="image" src={placemarkers} alt="placemarkers" />
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="partners-content">
        <div className="grid1">
          <div className="col-w1">{renderCol1()}</div>
          <div className="col-w1">{renderCol2()}</div>
          <div className="col-w1">{renderCol3()}</div>
          <div className="col-w1">{renderCol4()}</div>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="partners-content">
        <div className="grid2">
          <div className="col-w1">{renderCol1()}</div>
          <div className="col-w1">{renderCol2()}</div>
          <div className="col-w1">{renderCol3()}</div>
          <div className="col-w1">{renderCol4()}</div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="partners-content">
        <div className="grid4">
          <div className="col-w1">{renderCol1()}</div>
          <div className="col-w1">{renderCol2()}</div>
          <div className="col-w1">{renderCol3()}</div>
          <div className="col-w1">{renderCol4()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="partners">
      <div className="page-header">Partners</div>
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
}

export default Partners;
