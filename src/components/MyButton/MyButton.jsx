import React from "react";
import "./MyButton.css";
import { Link } from "react-router-dom";

const MyButton = ({ text, link, onClick }) => {
  return (
    <div>
      {link ? (
        <Link className="my-button" to={link}>
          <div className="my-button-text">{text}</div>
        </Link>
      ) : (
        <div className="my-button" onClick={() => onClick()}>
          <div className="my-button-text">{text}</div>
        </div>
      )}
      {/* {link ? (
        <Link className="my-button" onClick={console.log("xxx")}>
          <div className="my-button-text">{text}</div>
        </Link>
      ) : (
        <Link className="my-button" to={link}>
          <div className="my-button-text">{text}</div>
        </Link>
      )} */}
    </div>
  );
};

export default MyButton;
