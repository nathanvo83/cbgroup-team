import React from "react";
import "./WhyChooseUs.css";
import { Desktop, Mobile, Tablet } from "../Responsive/Reponsive";
import {
  FaHandshake,
  FaMedal,
  FaClock,
  FaHeartbeat,
  FaGraduationCap,
  FaDollarSign,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const data = [
    {
      icon: <FaDollarSign className="choose-us-icon" />,
      title: "We Price Match",
      text: "Found a cheaper price? Tell us and we are happy to match it",
    },
    {
      icon: <FaHandshake className="choose-us-icon" />,
      title: "Stress-Free Build",
      text: "We assign a dedicated project manager to keep your build running smoothly",
    },
    {
      icon: <FaMedal className="choose-us-icon" />,
      title: "High-Quality Deliverables",
      text: "We always aim for the highest quality to exceed our customer’s expectations",
    },
    {
      icon: <FaClock className="choose-us-icon" />,
      title: "Deliver On Time",
      text: "A fast seamless planning, design and construction process with no hidden surprises in the end",
    },
    {
      icon: <FaGraduationCap className="choose-us-icon" />,
      title: "75 Years Of Combined Experience",
      text: "Customers have confidence in our knowledge, expertise and word of mouth referrals supported by over 75 years of combined experience",
    },
    {
      icon: <FaHeartbeat className="choose-us-icon" />,
      title: "Admired By Our Customers",
      text: "Always exceeding customer’s expectations and supporting them in every step of the process has made us an admired company supported by their testimonials.",
    },
  ];

  const renderItem = (icon, title, text) => {
    return (
      <div className="choose-us-item">
        <div>{icon}</div>

        <div className="choose-us-title">{title}</div>
        <div className="choose-us-text">{text}</div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="grid1">
        {data.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {renderItem(item.icon, item.title, item.text)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderTablet = () => {
    return (
      <div className="grid2">
        {data.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {renderItem(item.icon, item.title, item.text)}
            </div>
          );
        })}
      </div>
    );
  };
  const renderDesktop = () => {
    return (
      <div className="grid3">
        {data.map((item) => {
          return (
            <div key={item.text} className="col-w1">
              {renderItem(item.icon, item.title, item.text)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="choose-us">
      <div className="choose-us-header">Why Should You Choose Us</div>

      <Desktop>{renderDesktop()}</Desktop>
      <Tablet>{renderTablet()}</Tablet>
      <Mobile>{renderMobile()}</Mobile>
    </div>
  );
};

export default WhyChooseUs;
