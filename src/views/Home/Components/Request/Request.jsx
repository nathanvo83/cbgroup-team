import React from "react";
import "./Request.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";

const Request = () => {
  const renderText = () => {
    return (
      <div className="text">
        UNDERSTAND WHAT GOES INTO A BUILDING PROJECT BEFORE YOU START
      </div>
    );
  };

  const renderButton = () => {
    return (
      <div className="button">
        <input type="button" value="Request a planning session"></input>
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
      <div className="row">
        <div>{renderText()}</div>
        <div>{renderButton()}</div>
      </div>
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
