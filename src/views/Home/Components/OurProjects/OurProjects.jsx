import React from "react";
import "./OurProjects.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";
import nzcb from "../../../../assets/images/Partners/NZCB.png";
import Request from "../../../../components/Request/Request";

const OurProjects = () => {
  const requestText =
    "WHETHER YOU’RE THINKING ABOUT BUILDING OR ALREADY HAVE PLANS, WE’LL MAKE SURE YOU KNOW WHAT YOU’RE GETTING";

  const renderProject01 = () => {
    return (
      <div className="project-content">
        <div className="project-img">
          <img src={nzcb} alt="1" />
        </div>
        <br />
        <div className="project-title">New builds</div>
        <div className="project-subtitle">New Market, Auckland.</div>

        <div className="project-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sequi,
          ratione iure, ipsam officiis similique necessitatibus doloremque quia
          dolorum assumenda vitae itaque consequuntur? Tenetur, cumque?
          Molestias amet porro numquam consectetur?
        </div>
      </div>
    );
  };

  const renderProject02 = () => {
    return (
      <div className="project-content">
        <div className="project-img">
          <img src={nzcb} alt="1" />
        </div>
        <br />
        <div className="project-title">Home renovations</div>
        <div className="project-subtitle">Henderson, Waitakere.</div>
        <div className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          eligendi vitae in repellendus, aliquam asperiores eos explicabo
          debitis rem sapiente cupiditate ipsa aperiam facilis libero fugit!
          Eveniet expedita tempora exercitationem?
        </div>
      </div>
    );
  };

  const renderProject03 = () => {
    return (
      <div className="project-content">
        <div className="project-img">
          <img src={nzcb} alt="1" />
        </div>
        <br />
        <div className="project-title">Interior & Exterior</div>
        <div className="project-subtitle">Henderson, Waitakere.</div>
        <div className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          eligendi vitae in repellendus, aliquam asperiores eos explicabo
          debitis rem sapiente cupiditate ipsa aperiam facilis libero fugit!
          Eveniet expedita tempora exercitationem?
        </div>
      </div>
    );
  };

  const renderProject04 = () => {
    return (
      <div className="project-content">
        <div className="project-img">
          <img src={nzcb} alt="1" />
        </div>
        <br />
        <div className="project-title">Home renovations</div>
        <div className="project-subtitle">Henderson, Waitakere.</div>
        <div className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          eligendi vitae in repellendus, aliquam asperiores eos explicabo
          debitis rem sapiente cupiditate ipsa aperiam facilis libero fugit!
          Eveniet expedita tempora exercitationem?
        </div>
      </div>
    );
  };

  const renderRequest = () => {
    return <Request text={requestText}></Request>;
  };

  const renderDesktop = () => {
    return (
      <div className="grid2">
        <div className="col-w1">{renderProject01()}</div>
        <div className="col-w1">{renderProject02()}</div>
        <div className="col-w2">{renderRequest()}</div>
        <div className="col-w1">{renderProject03()}</div>
        <div className="col-w1">{renderProject04()}</div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="grid2">
        <div className="col-w1">{renderProject01()}</div>
        <div className="col-w1">{renderProject02()}</div>
        <div className="col-w2">{renderRequest()}</div>
        <div className="col-w1">{renderProject03()}</div>
        <div className="col-w1">{renderProject04()}</div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        <div className="col-w1">{renderProject01()}</div>
        <div className="col-w1">{renderProject02()}</div>
        <div className="col-w1">{renderRequest()}</div>
        <div className="col-w1">{renderProject03()}</div>
        <div className="col-w1">{renderProject04()}</div>
      </div>
    );
  };

  return (
    <div className="our-projects">
      <div className="page-header">Our Projects</div>
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default OurProjects;
