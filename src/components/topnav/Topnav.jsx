import React from "react";
import "./topnav.css";
import { GoDotFill } from "react-icons/go";
import { RiPhoneFill } from "react-icons/ri";
import group from "../../assets/img/Group.svg";

const Topnav = () => {
  return (
    <>
      <div className="main-content">
        <div className="topnav">
          <a href="#" className="topnav-items">
            <div className="item-details">
              <img src={group} />
              1800 2666
            </div>
          </a>
          <span className="seperator">|</span>
          <a href="#" className="topnav-items">
            <div className="item-details">
              <RiPhoneFill />
              Call Back
            </div>
          </a>
          <span className="seperator">|</span>
          <a href="#" className="live-chat">
            <GoDotFill className="active" />
            <span>Live Chat</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Topnav;
