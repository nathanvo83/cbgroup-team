import React from "react";
import "./Partners.css";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";

import dulux from "../../assets/images/Partners/dulux.png";
import kfc from "../../assets/images/Partners/kfc.png";
import master_builder from "../../assets/images/Partners/master-builder.jpg";
import remax from "../../assets/images/Partners/remax.PNG";
import resene from "../../assets/images/Partners/Resene.png";
import site_safe from "../../assets/images/Partners/Site-Safe.jpg";

function Partners() {
  // const renderCol1 = () => {
  //   return (
  //     <div>
  //       <img className="partner-image" src={dulux} alt="dulux" />
  //       <img className="partner-image" src={remax} alt="remax" />
  //       <img className="partner-image" src={site_safe} alt="site_safe" />
  //     </div>
  //   );
  // };

  // const renderCol2 = () => {
  //   return (
  //     <div>
  //       <img
  //         className="partner-image"
  //         src={master_builder}
  //         alt="master_builder"
  //       />
  //     </div>
  //   );
  // };

  // const renderCol3 = () => {
  //   return (
  //     <div>
  //       <img className="partner-image" src={kfc} alt="kfc" />
  //       <img className="partner-image" src={resene} alt="resene" />
  //     </div>
  //   );
  // };

  const renderMobile = () => {
    return (
      <div className="partners-content">
        <div className="grid1">
          <div className="col-w1">
            <img className="partner-image" src={dulux} alt="dulux" />
            <img className="partner-image" src={remax} alt="remax" />
            <img className="partner-image" src={site_safe} alt="site_safe" />
            <img
              className="partner-image"
              src={master_builder}
              alt="master_builder"
            />
            <img className="partner-image" src={kfc} alt="kfc" />
            <img className="partner-image" src={resene} alt="resene" />
          </div>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="partners-content">
        <div className="grid2">
          <div className="col-w1">
            <img className="partner-image" src={dulux} alt="dulux" />
            <img className="partner-image" src={remax} alt="remax" />
            <img className="partner-image" src={site_safe} alt="site_safe" />
            <img className="partner-image" src={resene} alt="resene" />
          </div>
          <div className="col-w1">
            <img
              className="partner-image"
              src={master_builder}
              alt="master_builder"
            />
            <img className="partner-image" src={kfc} alt="kfc" />
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="partners-content">
        <div className="grid3">
          <div className="col-w1">
            <img className="partner-image" src={dulux} alt="dulux" />
            <img className="partner-image" src={remax} alt="remax" />
            <img className="partner-image" src={site_safe} alt="site_safe" />
          </div>
          <div className="col-w1">
            <img
              className="partner-image"
              src={master_builder}
              alt="master_builder"
            />
          </div>
          <div className="col-w1">
            <img className="partner-image" src={kfc} alt="kfc" />
            <img className="partner-image" src={resene} alt="resene" />
          </div>
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
