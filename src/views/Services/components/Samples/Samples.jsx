import React from "react";
import "./Samples.css";
import {
  Desktop,
  Tablet,
  Mobile,
} from "../../../../components/Responsive/Reponsive";

const Samples = ({ samples }) => {
  const renderItem = (address, image, text, link) => {
    return (
      <div className="sample-item">
        <div className="sample-title">{address}</div>
        <div className="sample-img">
          <img src={image} alt="1" />
        </div>
        <div className="sample-text">{text}</div>
        <br />
        <div className="sample-button">
          <input type="button" value="Read Case Study"></input>
        </div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        {samples.map((item) => {
          return (
            <div className="col-w1">
              {renderItem(item.address, item.image, item.text, item.link)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderTablet = () => {
    return (
      <div className="grid2">
        {samples.map((item) => {
          return (
            <div className="col-w1">
              {renderItem(item.address, item.image, item.text, item.link)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderDesktop = () => {
    return (
      <div className="grid3">
        {samples.map((item) => {
          return (
            <div className="col-w1">
              {renderItem(item.address, item.image, item.text, item.link)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="samples">
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default Samples;
