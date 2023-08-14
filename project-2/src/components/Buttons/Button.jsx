import React from "react";
import "./Button.css";
// import { MdMessage } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";

const Button = ({ text, icon, isOutline, ...rest }) => {
  return (
    <div className="container">
      <button {...rest} className={isOutline ? "outline-btn" : "primary-btn"}>
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Button;
