import React from "react";
import "./Request.css";
import { Desktop, Mobile, Tablet } from "../Responsive/Reponsive";
import MyButton from "../MyButton/MyButton";
import * as ROUTERS from "../../constants/routes";

const Request = ({ text }) => {
  const renderText = () => {
    return <div className="request-text">{text}</div>;
  };

  const renderButton = () => {
    return (
      <div className="request-button">
        <MyButton
          link={ROUTERS.CONTACTUS}
          text="Request a planning session"
        ></MyButton>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        <div className="col-w1">{renderText()}</div>
        <div className="col-w1">{renderButton()}</div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="grid1">
        <div className="col-w1">{renderText()}</div>
        <div className="col-w1">{renderButton()}</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="grid1">
        <div className="col-w1">{renderText()}</div>
        <div className="col-w1">{renderButton()}</div>
      </div>
      // <div className="row">
      //   <div>{renderText()}</div>
      //   <div>{renderButton()}</div>
      // </div>
    );
  };

  return (
    <div className="request">
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default Request;
