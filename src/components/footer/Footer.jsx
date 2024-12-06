import React from "react";
import "./footer.css";
import logo from "../../assets/img/footer-logo.svg";
const Footer = () => {
  return (
    <>
      <section className="footer-main">
        <div className="footer">
          <div className="left">
            <img src={logo} alt="" />
            <h3>InvestSphere Company Limited, </h3>
            <p>
              House No. 25, Green Meadows ColonySector 10, Rajendra
              Nagar Jaipur, Rajasthan,Pin Code: 302017
            </p>
            <p>Email: customersupport@icicilombard.com Fax no - 022 61961323</p>
            <div className="social-media">
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-youtube"></i>
              <i className="fa fa-instagram"></i>
            </div>
          </div>
          <div className="right">
            <p className="footer-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h3 className="quicklinks">QuickLinks</h3>
            Home Car Insurance | TwoWheeler Insurance | Health Insurance |
            Travel Insurance | Other Insurance | Claims
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
