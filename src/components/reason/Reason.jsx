import React from "react";
import "./reason.css";
import reasonLeftBlock from "../../assets/img/reason-left-block.png";
import Description from "./Description";
import applyBtn from "../../assets/img/apply-btn-icon.svg";
const data = [
  {
    id: "01",
    title: "Convenience",
    description:
      "Compare different plans and purchase insurance at your comfort",
  },
  {
    id: "02",
    title: "24X7 availability",
    description: "Buy anytime, any day from anywhere",
  },
  {
    id: "03",
    title: "Quick process",
    description:
      "Usually faster than traditional methods, where you can complete the process in just a few clicks",
  },
  {
    id: "04",
    title: "User-friendly tools",
    description:
      "Get calculators and tools to understand the coverage needed and the costs",
  },
  {
    id: "05",
    title: "Instant policy issuance",
    description: "Get policy documents immediately upon premium payment",
  },
];
const Reason = () => {
  return (
    <>
      <section className="reason">
        <img src={reasonLeftBlock} alt="" />
        <div className="right-block">
          <h1 className="heading">Reason to buy bike insurance Online</h1>
          <div className="right-block-desc">
            {data.map((d) => {
              return (
                <Description
                  id={d.id}
                  title={d.title}
                  description={d.description}
                />
              );
            })}
          </div>
          <button className="btn-apply">
            Apply Now <img src={applyBtn} alt="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Reason;
