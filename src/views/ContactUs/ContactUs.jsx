import React from "react";
import "./ContactUs.css";
import { BiPhoneCall, BiMailSend, BiHomeSmile } from "react-icons/bi";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";

function ContactUs() {
  const renderMobile = () => {
    return (
      <div className="row">
        <div className="col-1">
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="col-1">
          <input type="text" placeholder="Email"></input>
        </div>
        <div className="col-1">
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div className="row">
        <div className="col-2">
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="col-2">
          <input type="text" placeholder="Email"></input>
        </div>
        <div className="col-1">
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="row">
        <div className="col-2">
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="col-2">
          <input type="text" placeholder="Email"></input>
        </div>
        <div className="col-1">
          <textarea placeholder="Message"></textarea>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-us">
      <div className="header">Contact Us</div>

      <div className="row">
        <BiMailSend className="icon" />
        <div className="email"> info@cbgroup.co.nz</div>
      </div>
      <div className="row">
        <BiMailSend className="icon" />
        <div className="email">info@cbgroup.co.nz</div>
      </div>
      <div className="row">
        <BiPhoneCall className="icon" />
        <div className="phone">(+64)123456789</div>
      </div>
      <br />
      <div className="row">
        <BiHomeSmile className="icon" />
        <div>
          <div className="address">P.O Box 9999</div>
          <div className="address">Anzac Ave</div>
          <div className="address">Auckland</div>
        </div>
      </div>
      <br />

      <Mobile>{renderMobile()}</Mobile>
      <Tablet>{renderTablet()}</Tablet>
      <Desktop>{renderDesktop()}</Desktop>

      {/* <div className="row">
        <div className="col-2">
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="col-2">
          <input type="text" placeholder="Email"></input>
        </div>
        <div className="col-1">
          <textarea placeholder="Message"></textarea>
        </div>
      </div> */}
      <div className="button-content">
        <input type="button" value="SUBMIT"></input>
      </div>
    </div>
  );
}

export default ContactUs;
