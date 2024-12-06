import React from "react";
import "./onlineinsurance.css";
import leftImg from "../../assets/img/online-insurance.png";
import Rightblock from "./Rightblock";
const data = [
  {
    heading: "Instant online policy on email",
    description:
      "Get the convenience of receiving your policy instantly via email. This seamless process ensures immediate access to your coverage without any delays. Just fill in details about yourself and your bike, make the payment, and you are done.",
  },
  {
    heading: "No paperwork",
    description:
      "Get comprehensive coverage for your bike in just a few clicks without cumbersome paperwork. Check premiums online for the right coverage and customise your policy on the go.",
  },
  {
    heading: "Allows smooth renewal online",
    description:
      "You can renew your policy online with a few clicks from anywhere, anytime. Just enter the policy details and renew your plan instantly.",
  },
  {
    heading: "Digital claims process",
    description:
      "Say goodbye to endless physical visits to the office. Simply log in to our IL Take Care app, file your claim digitally, and receive instant repair approval through InstaSpect.",
  },
  {
    heading: "Round the clock claims assistance",
    description:
      "Our 24/7 claim assistance makes the claim process hassle-free. Contact us anytime at 1800 2666 for prompt support.",
  },
];
const Onlineinsurance = () => {
  return (
    <>
      <section className="online-insurance">
        <div className="inner-block">
          <h1 className="heading">
            Why You Should Buy Two Wheeler Insurance Online{" "}
          </h1>
        </div>
        <div className="description">
          <img src={leftImg} alt="" />
          <div className="right-block">
            {data.map((d, index) => {
              return (
                <Rightblock
                  key={index}
                  heading={d.heading}
                  description={d.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Onlineinsurance;
