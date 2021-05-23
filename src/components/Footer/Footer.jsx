import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { Desktop, Mobile, Tablet } from "../Responsive/Reponsive";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import "./Footer.css";

export const Footer = () => {
  const renderCol01 = () => {
    return (
      <div>
        <div className="footer-header">Our services</div>
        <Link className="footer-link" to={ROUTES.SERVICE_HOME_REMOVATIONS}>
          <div className="footer-text">Home Renovations</div>
        </Link>
        <Link className="footer-link" to={ROUTES.SERVICE_INTERIOR_EXTERIOR}>
          <div className="footer-text">Interior & Extorior</div>
        </Link>
        <Link className="footer-link" to={ROUTES.SERVICE_NEW_BUILDS}>
          <div className="footer-text">New builds</div>
        </Link>
      </div>
    );
  };

  const renderCol02 = () => {
    return (
      <div>
        <div className="footer-header">Our projects</div>
        <Link className="footer-link" to={ROUTES.PROJECT_QUEENSTREET}>
          <div className="footer-text">Queen Street</div>
        </Link>
        <Link className="footer-link" to={ROUTES.PROJECT_ALBANY}>
          <div className="footer-text">Albany</div>
        </Link>
        <Link className="footer-link" to={ROUTES.PROJECT_MISSIONBAY}>
          <div className="footer-text">Mission Bay</div>
        </Link>
      </div>
    );
  };

  const renderCol03 = () => {
    return (
      <div>
        <div className="footer-header">Get in touch</div>

        <a className="footer-link" href="mailto:info@cbgroup.co.nz">
          <div className="footer-row">
            <BiMailSend className="footer-icon" />
            <div>info@cbgroup.co.nz</div>
          </div>
        </a>
        <a className="footer-link" href="tel:123456789">
          <div className="footer-row">
            <BiPhoneCall className="footer-icon" />
            <div>(+64)123456789</div>
          </div>
        </a>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1 footer-content">
        <div className="col-w1">{renderCol01()}</div>
        <div className="col-w1">{renderCol02()}</div>
        <div className="col-w1">{renderCol03()}</div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="grid2 footer-content">
        <div className="col-w1">
          {renderCol01()}
          {renderCol03()}
        </div>
        <div className="col-w1">{renderCol02()}</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="grid3 footer-content">
        <div className="col-w1">{renderCol01()}</div>
        <div className="col-w1">{renderCol02()}</div>
        <div className="col-w1">{renderCol03()}</div>
      </div>
    );
  };

  return (
    <div className="footer">
      <Mobile>{renderMobile()}</Mobile>

      <Tablet>{renderTablet()}</Tablet>

      <Desktop>{renderDesktop()}</Desktop>
    </div>
  );
};
