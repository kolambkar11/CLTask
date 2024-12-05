import React from "react";
import icon from "../../assets/img/mdi_security-lock-outline.svg";
const Keyfeatureblock = (props) => {
  return (
    <>
      <div className="Keyfeatureblock">
        <div className="Keyfeatureblockinner">
          <img src={props.icon} className="icons" alt="" />
          <span>{props.title}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Keyfeatureblock;
