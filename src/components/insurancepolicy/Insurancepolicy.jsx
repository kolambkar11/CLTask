import React from "react";
import Iplisting from "./Iplisting";
import "./insurancepolicy.css";
import customercare from "../../assets/img/customercare.svg";
import check from "../../assets/img/check.svg";
import exclusion from "../../assets/img/exclusion.svg";
import bagRupeeSolid from "../../assets/img/bag-rupee-solid.svg";
import duration from "../../assets/img/duration.svg";
import shield from "../../assets/img/shield.svg";
import addOns from "../../assets/img/add-ons.svg";
import toolKit from "../../assets/img/tool-kit.svg";

const data = [
  {
    icon: toolKit,
    title: "Coverage Type",
    description:
      "Decide between Third-Party Insurance (mandatory by law) or Comprehensive Insurance (for better protection, including own damages).",
  },
  {
    icon: addOns,
    title: "Add-Ons and Riders",
    description:
      "Look for useful add-ons like zero depreciation, roadside assistance, engine protection, and personal accident cover.",
  },

  {
    icon: shield,
    title: "Insured Declared Value (IDV)",
    description:
      "Check the IDV, as it determines the maximum claim amount in case of total loss or theft. Choose an appropriate IDV to balance coverage and premiums.",
  },

  {
    icon: duration,
    title: "Policy Duration",
    description:
      "Consider long-term policies (up to 3 years) to avoid annual renewals and enjoy discounts.",
  },

  {
    icon: bagRupeeSolid,
    title: "Premium Amount",
    description:
      "Compare premiums from multiple providers. Ensure the premium aligns with the features and benefits offered.",
  },
  {
    icon: exclusion,
    title: "Exclusions",
    description:
      "Read the policy terms to understand what’s not covered, such as normal wear and tear or illegal usage.",
  },

  {
    icon: check,
    title: "Claim Settlement Ratio",
    description:
      "Check the insurer's claim settlement ratio to assess their reliability in processing claims quickly and efficiently.",
  },

  {
    icon: customercare,
    title: "Customer Support",
    description:
      "Ensure the insurer provides 24/7 customer assistance for queries or emergencies.",
  },
];
const Insurancepolicy = () => {
  return (
    <>
      <section className="insurance-policy">
        <h1>
          Things to keep in mind while buying a two wheeler insurance policy{" "}
        </h1>
        <div className="iplisting">
          {data.map((d, index) => {
            return (
              <Iplisting
                key={index}
                icon={d.icon}
                title={d.title}
                description={d.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Insurancepolicy;
