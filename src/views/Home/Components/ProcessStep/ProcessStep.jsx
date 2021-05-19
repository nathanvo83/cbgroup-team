import React from "react";
import "./ProcessStep.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";

const ProcessStep = () => {
  const renderCol01 = () => {
    return (
      <div>
        <div className="number">1.</div>
        <div className="name">PREBUILD</div>
        <div className="subtitle">
          LAYING THE FOUNDATIONS FOR A SUCCESSFUL BUILD
        </div>
        <div>Plan out your entire build to match budgets and time frame</div>
        <div>+ Initial meeting</div>
        <div>+ Working with the architect</div>
        <div>+ Resource consents</div>
        <div>+ Final budgets & reporting</div>
      </div>
    );
  };
  const renderCol02 = () => {
    return (
      <div>
        <div className="number">2.</div>
        <div className="name">CONSTRUCTION</div>
        <div className="subtitle">MAKING YOUR PLANS INTO A REALITY</div>
        <div>Managing the build process to control budget and timeframe</div>
        <div>+ Set construction timeline</div>
        <div>+ Project, site and budget management</div>
        <div>+ Keeping you informed of progress</div>
        <div>+ Ensuring code of compliance is met</div>
      </div>
    );
  };

  const renderCol03 = () => {
    return (
      <div>
        <div className="number">3.</div>
        <div className="name">POST BUILD</div>
        <div className="subtitle">WARRANTIES & MAINTENANCE</div>
        <div>We don’t up and leave you once the builders are done</div>
        <div>+ Guarantees and warranties</div>
        <div>+ Customised maintenance schedule</div>
        <div>+ Assistance maintaining your home</div>
        <div>+ Always available when you need us</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div>
        <div className="grid3">
          <div className="col-w1">{renderCol01()}</div>
          <div className="col-w1">{renderCol02()}</div>
          <div className="col-w1">{renderCol03()}</div>
        </div>
      </div>
    );
  };
  const renderTablet = () => {
    return (
      <div>
        <div className="grid1">
          <div className="col-w1">{renderCol01()}</div>
          <div className="col-w1">{renderCol02()}</div>
          <div className="col-w1">{renderCol03()}</div>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div>
        <div className="grid1">
          <div className="col-w1">{renderCol01()}</div>
          <div className="col-w1">{renderCol02()}</div>
          <div className="col-w1">{renderCol03()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="process-step">
      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default ProcessStep;
