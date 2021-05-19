import React from "react";
import "./ContactUs.css";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";

function ContactUs() {
  const renderMobile = () => {
    return (
      <div>
        <div className="grid1">
          <div className="col-w1">
            <input type="text" placeholder="Name"></input>
          </div>
          <div className="col-w1">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="col-w1">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div>
        <div className="grid2">
          <div className="col-w1">
            <input type="text" placeholder="Name"></input>
          </div>
          <div className="col-w1">
            <input type="text" placeholder="Email"></input>
          </div>
        </div>
        <br />
        <div className="grid1">
          <div className="col-w1">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div>
        <div className="grid2">
          <div className="col-w1">
            <input type="text" placeholder="Name"></input>
          </div>
          <div className="col-w1">
            <input type="text" placeholder="Email"></input>
          </div>
        </div>
        <br />
        <div className="grid1">
          <div className="col-w1">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="contact-us">
      <div className="page-header">Contact Us</div>

      <div className="row">
        <BiMailSend className="icon" />
        <div className="text"> info@cbgroup.co.nz</div>
      </div>
      <div className="row">
        <BiMailSend className="icon" />
        <div className="text">info@cbgroup.co.nz</div>
      </div>
      <div className="row">
        <BiPhoneCall className="icon" />
        <div className="text">(+64)123456789</div>
      </div>
      <br />

      <Mobile>{renderMobile()}</Mobile>
      <Tablet>{renderTablet()}</Tablet>
      <Desktop>{renderDesktop()}</Desktop>
      <br />
      <div className="button-content">
        <input type="button" value="SUBMIT"></input>
      </div>
    </div>
  );
}

export default ContactUs;
