import React from "react";
import "./Slogan.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";
import { FaQuoteLeft } from "react-icons/fa";

const Slogan = () => {
  const renderContent = () => {
    return (
      <div>
        <div className="slogan-icon">
          <FaQuoteLeft />
        </div>
        <div className="slogan-text">
          Renovating your home is often described as a stressful and challenging
          time. Nothing could be further from the truth based on our experience
          with Cameron Bell and the team at CB Projects.
        </div>
        <div className="slogan-author">CHERIE AND ROHAN WHITAKER</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return <div>{renderContent()}</div>;
  };

  const renderTablet = () => {
    return <div>{renderContent()}</div>;
  };

  const renderMobile = () => {
    return <div>{renderContent()}</div>;
  };

  return (
    <div className="slogan">
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default Slogan;
