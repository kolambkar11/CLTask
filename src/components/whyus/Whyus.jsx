import React from "react";
import "./whyus.css";
import wrench from "../../assets/img/wrench.svg";
import umbrella from "../../assets/img/umbrella.svg";
import thunder from "../../assets/img/thunder.svg";
import verify from "../../assets/img/verify.svg";
import serviceLine from "../../assets/img/service-line.svg";
import Whyusblock from "./Whyusblock";
const Whyus = () => {
  return (
    <>
      <section className="whyus">
        <h1>Why our customers love us?</h1>
        <p className="description">And, we think you will too.</p>
        <div className="whyusInnerContainer">
          <Whyusblock
            icon={umbrella}
            title="Extensive Coverage Options"
            description="Choose from Third Party (TP) or Comprehensive plans tailored to your needs."
          />
          <Whyusblock
            icon={thunder}
            title="Instant Policy Issuance"
            description="Buy or renew your policy online in minutes—no paperwork needed!"
          />
          <Whyusblock
            icon={wrench}
            title="Wide Network of Garages"
            description="Access cashless repairs at an extensive network of trusted service centers."
          />
        </div>
        <div className="whyusInnerContainer">
          <Whyusblock
            icon={verify}
            title="Hassle-Free Claims"
            description="Quick and smooth claim settlement to get you back on the road without delays."
          />
          <Whyusblock
            icon={serviceLine}
            title="Dedicated Support"
            description="Our expert team is always ready to assist you at every step."
          />
        </div>
      </section>
    </>
  );
};

export default Whyus;
