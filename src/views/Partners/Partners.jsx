import React from "react";
import "./Partners.css";
import carternz from "../../assets/images/Partners/carternz.png";
import placemarkers from "../../assets/images/Partners/placemakers.jpg";
import nzcb from "../../assets/images/Partners/NZCB.png";
import engeo from "../../assets/images/Partners/engeo.png";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";

function Partners() {
  const renderMobile = () => {
    return (
      <div className="partners-content">
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={nzcb} alt="nzcb" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={placemarkers} alt="placemarkers" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={carternz} alt="carternz" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={engeo} alt="engeo" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="partners-content">
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={nzcb} alt="nzcb" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={placemarkers} alt="placemarkers" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={carternz} alt="carternz" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={engeo} alt="engeo" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="partners-content">
        <div className="row">
          <div className="w1-3">
            <div className="item">
              <img className="img-item" src={nzcb} alt="nzcb" />
            </div>
          </div>
          <div className="w2-3">
            <div className="item">
              <img className="img-item" src={placemarkers} alt="placemarkers" />
            </div>
            <div className="item">
              <img className="img-item" src={carternz} alt="carternz" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="w1-1">
            <div className="item">
              <img className="img-item" src={engeo} alt="engeo" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="partners">
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
}

export default Partners;
