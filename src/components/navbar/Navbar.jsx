import React from "react";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/quill_hamburger.svg";
import "./navbar.css";
import Button from "../common/Button";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="" className="">
          <img src={logo} alt="" className="navbar-logo" />
        </a>
        <div className="navbar-links">
          <a href="" className="navbar-items">
            Car Insurance
          </a>
          <a href="" className="navbar-items">
            Two Wheeler Insurance
          </a>
          <a href="" className="navbar-items">
            Health Insurance
          </a>
          <a href="" className="navbar-items">
            Travel Insurance
          </a>
          <a href="" className="navbar-items">
            Other Insurance
          </a>
          <a href="" className="navbar-items">
            Claims
          </a>
        </div>
        <div className="navbar-button">
          {/* <button className="login-btn">Login</button> */}
          <Button textname="Login" />
          <img src={menu} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
