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
        <div className="header">Our services</div>
        <Link className="link" to={ROUTES.SERVICE_HOME_REMOVATIONS}>
          <div className="text">Home Renovations</div>
        </Link>
        <Link className="link" to={ROUTES.SERVICE_INTERIOR_EXTORIOR}>
          <div className="text">Interior & Extorior</div>
        </Link>
        <Link className="link" to={ROUTES.SERVICE_NEW_BUILDS}>
          <div className="text">New builds</div>
        </Link>
      </div>
    );
  };

  const renderCol02 = () => {
    return (
      <div>
        <div className="header">Our projects</div>
        <Link className="link" to={ROUTES.PROJECT_QUEENSTREET}>
          <div className="text">Queue Street</div>
        </Link>
        <Link className="link" to={ROUTES.PROJECT_ALBANY}>
          <div className="text">Albany</div>
        </Link>
        <Link className="link" to={ROUTES.PROJECT_MISSIONBAY}>
          <div className="text">Mission Bay</div>
        </Link>
        <Link className="link">
          <div className="text">Mouth Albert</div>
        </Link>
        <Link className="link">
          <div className="text">Henderson</div>
        </Link>
      </div>
    );
  };

  const renderCol03 = () => {
    return (
      <div>
        <div className="header">Get in touch</div>

        <a className="link" href="mailto:info@cbgroup.co.nz">
          <div className="row">
            <BiMailSend className="icon" />
            <div>info@cbgroup.co.nz</div>
          </div>
        </a>
        <a className="link" href="tel:123456789">
          <div className="row">
            <BiPhoneCall className="icon" />
            <div>(+64)123456789</div>
          </div>
        </a>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="footer-content">
        <div className="column-m">{renderCol01()}</div>
        <div className="column-m">{renderCol02()}</div>
        <div className="column-m">{renderCol03()}</div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="footer-content">
        <div className="column-t">{renderCol01()}</div>
        <div className="column-t">{renderCol02()}</div>
        <div className="column-t">{renderCol03()}</div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="footer-content">
        <div className="column-d">{renderCol01()}</div>
        <div className="column-d">{renderCol02()}</div>
        <div className="column-d">{renderCol03()}</div>
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
