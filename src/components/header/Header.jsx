import React from "react";
import "./header.css";
import scooterinsurance from "../../assets/img/scooter-insurance.png";
import Button from "../common/Button";
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Two Wheeler insurance</h1>
        <p className="subheading">Prices starting at just ₹2,094/yr</p>
        <p className="nextsubheading">
          This amount refers to the TP rates only
        </p>
        <img src={scooterinsurance} className="image-floater" alt="" />
        <div className="left-block">
          <form action="" className="d-flex form">
            <input type="text" placeholder="Car registration no." />
            <input type="text" placeholder="Mobile no." />
            <input type="text" placeholder="Mobile no." />
            <div>
              <Button textname="Get Quote" />
              <a href="">
                <u>Retrive quote</u>
              </a>
            </div>
            <div>
              <input type="checkbox" /> I agree to the terms and conditions
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
