import React from "react";
import "./Slogan.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";

const Slogan = () => {
  const renderCol01 = () => {
    return (
      <div>
        <div className="text">
          BUILDING OR RENOVATING YOUR HOME CAN BE A COMPLEX PROCESS, WITH CB
          PROJECTS IT DOESN’T NEED TO BE
        </div>
        <div className="text">
          Too often people who build or renovate their home find it very complex
          or stressful.
        </div>
        <div className="text">
          Certified Building Projects hasn’t had these responses. Our clients
          across Auckland happily recommend us to others and even come back to
          renovate or build their next homes with us as well.
        </div>
      </div>
    );
  };

  const renderCol02 = () => {
    return (
      <div>
        <div className="text">
          “Renovating your home is often described as a stressful and
          challenging time. Nothing could be further from the truth based on our
          experience with Cameron Bell and the team at CB Projects.”
        </div>
        <div className="text">CHERIE AND ROHAN WHITAKER</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="grid2">
        <div className="col-w1">{renderCol01()}</div>
        <div className="col-w1">{renderCol02()}</div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="grid2">
        <div className="col-w1">{renderCol01()}</div>
        <div className="col-w1">{renderCol02()}</div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        <div className="col-w1">{renderCol01()}</div>
        <div className="col-w1">{renderCol02()}</div>
      </div>
    );
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
