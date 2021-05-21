import React from "react";
import "./ProcessStep.css";
import {
  Desktop,
  Mobile,
  Tablet,
} from "../../../../components/Responsive/Reponsive";
import { BiCheck } from "react-icons/bi";

const ProcessStep = () => {
  const renderCol01 = () => {
    return (
      <div>
        <div className="step-number">1.</div>
        <div className="step-name">PREBUILD</div>
        <div className="step-subtitle">
          LAYING THE FOUNDATIONS FOR A SUCCESSFUL BUILD
        </div>
        <div>Plan out your entire build to match budgets and time frame</div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Initial meeting</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          Working with the architect
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Resource consents</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Final budgets & reporting</div>
        </div>
      </div>
    );
  };
  const renderCol02 = () => {
    return (
      <div>
        <div className="step-number">2.</div>
        <div className="step-name">CONSTRUCTION</div>
        <div className="step-subtitle">MAKING YOUR PLANS INTO A REALITY</div>
        <div>Managing the build process to control budget and timeframe</div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Set construction timeline</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Project, site and budget management</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Keeping you informed of progress</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Ensuring code of compliance is met</div>
        </div>
      </div>
    );
  };

  const renderCol03 = () => {
    return (
      <div>
        <div className="step-number">3.</div>
        <div className="step-name">POST BUILD</div>
        <div className="step-subtitle">WARRANTIES & MAINTENANCE</div>
        <div>We don’t up and leave you once the builders are done</div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Guarantees and warranties</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Customised maintenance schedule</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Assistance maintaining your home</div>
        </div>
        <div className="step-row">
          <BiCheck className="step-icon" />
          <div>Always available when you need us</div>
        </div>
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
