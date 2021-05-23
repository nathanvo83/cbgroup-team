import React from "react";
import "./Gallery.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";
import Request from "../../../../components/Request/Request";

const Gallery = ({ images }) => {
  const request =
    "WHETHER YOU’RE THINKING ABOUT BUILDING OR ALREADY HAVE PLANS, WE’LL MAKE SURE YOU KNOW WHAT YOU’RE GETTING";

  const renderImage = (image) => {
    return (
      <div className="gallery-img">
        <img className="gallery-img" src={image} alt="1" />
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        {images.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {renderImage(item.img)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderTablet = () => {
    return (
      <div className="grid2">
        {images.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {renderImage(item.img)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderDesktop = () => {
    return (
      <div className="grid2">
        {images.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {/* {item.text} */}
              {renderImage(item.img)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="gallery">
      <Request text={request}></Request>
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default Gallery;
