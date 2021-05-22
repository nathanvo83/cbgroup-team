import React from "react";
import "./ContactUs.css";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { Desktop, Mobile, Tablet } from "../../components/Responsive/Reponsive";
import MyButton from "../../components/MyButton/MyButton";
function ContactUs() {
  const renderContact = () => {
    return (
      <div>
        <div className="contact-item">
          <BiMailSend className="contact-icon" />
          <div className="contact-title">Send An Email</div>
          <div className="contact-text">
            Happy to hear your thoughts about your project at any time, just
            send us an email
          </div>
          <div className="contact-subtitle"> info@cbgroup.co.nz</div>
        </div>
        <div className="contact-item">
          <BiPhoneCall className="contact-icon" />
          <div className="contact-title">Call Us Today</div>
          <div className="contact-text">
            Please get in touch to discuss your requirements by calling our
            number
          </div>
          <div className="contact-subtitle">(+64)211686968</div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div>
        <div className="contact-title">Get a FREE No Obligation Quote</div>
        <br />
        <div>
          <input type="text" placeholder="Name"></input>
        </div>
        <br />
        <div>
          <input type="text" placeholder="Email"></input>
        </div>
        <br />
        <div>
          <textarea placeholder="Message"></textarea>
        </div>
        <br />
        <div>
          <MyButton
            text="SEND"
            onClick={() => {
              console.log("send email");
            }}
          ></MyButton>
        </div>
        {/* <input type="button" value="SUBMIT"></input> */}
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div>
        <div className="grid1">
          <div className="col-w1">{renderContact()}</div>
          <div className="col-w1">{renderForm()}</div>
        </div>
      </div>
    );
  };

  const renderTablet = () => {
    return (
      <div>
        <div className="grid1">
          <div className="col-w1">{renderContact()}</div>
          <div className="col-w1">{renderForm()}</div>
        </div>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div>
        <div className="grid2">
          <div className="col-w1">{renderContact()}</div>
          <div className="col-w1">{renderForm()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-us">
      <div className="page-header">We Would Love To Hear From You</div>
      <div>
        Get in touch with if you are looking for reliable and professional
        builders in Auckland for extra space renovation, extension, or
        conversion. Our professional team is always happy to hear your thoughts
        about your project, either on the phone or in person. If you would like
        to discuss your project requirement, schedule a FREE no-obligation
        personal appointment or site meeting, you can phone or email us directly
        or use the enquiry form below.
      </div>
      <br />

      {/* <div className="row">
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
      </div> */}
      <br />

      <Mobile>{renderMobile()}</Mobile>
      <Tablet>{renderTablet()}</Tablet>
      <Desktop>{renderDesktop()}</Desktop>
      <br />
      {/* <div className="button-content">
        <input type="button" value="SUBMIT"></input>
      </div> */}
    </div>
  );
}

export default ContactUs;
