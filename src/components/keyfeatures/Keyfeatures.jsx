import React from "react";
import "./keyfeatures.css";
import Keyfeatureblock from "./Keyfeatureblock";
import fs from "../../assets/img/bx_slider.svg";
import co from "../../assets/img/clarity_gavel-line.svg";
import lc from "../../assets/img/Vector.svg";
import ao from "../../assets/img/mdi_security-lock-outline.svg";

const Keyfeatures = () => {
  return (
    <>
      <section className="keyfeatures">
        <h1 className="text-center headings">
          Key Feature Of Two Wheeler Insurance
        </h1>
        <div className="Keyfeatureblocks">
          <Keyfeatureblock
            icon={ao}
            title="Financial Security"
            description="Reduces out-of-pocket expenses during unforeseen events."
          />
          <Keyfeatureblock
            icon={fs}
            title="Coverage Option"
            description="Flexible plans to suit different budgets and needs."
          />
          <Keyfeatureblock
            icon={co}
            title="Legal Compliance"
            description="Ensures you meet the legal requirements for riding on the road."
          />
          <Keyfeatureblock
            icon={lc}
            title="Add-Ons"
            description="Includes options like zero depreciation, roadside assistance"
          />
        </div>
      </section>
    </>
  );
};

export default Keyfeatures;
