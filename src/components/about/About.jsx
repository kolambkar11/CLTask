import React from "react";
import "./about.css";
import scooter from "../../assets/img/section-img.png";
import Aboutlisting from "./Aboutlisting";
import handShake from "../../assets/img/pepicons-print_handshake.svg";
import solarShield from "../../assets/img/solar_shield-broken.svg";
import motorCycle from "../../assets/img/ri_motorbike-fill.svg";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="scooter-bg"></div>
        <div className="scooter-description">
          <h1>What is Two Wheeler Insurance?</h1>
          <p>
            Two-wheeler insurance is a type of motor vehicle insurance designed
            specifically for motorcycles, scooters, and other two-wheelers. It
            provides financial protection against potential risks such as
            accidents, theft, natural disasters, and third-party liabilities. In
            India, having at least a basic Third-Party Liability insurance
            policy is legally mandatory under the Motor Vehicles Act, 1988.
          </p>
          <div className="aboutList">
            <Aboutlisting
              icon={handShake}
              title="Third-Party Insurance"
              listing1="Covers damages caused to another person’s property, vehicle, or injuries to a third party."
              listing2="Mandatory by law but does not cover damage to your own vehicle."
            />
            <Aboutlisting
              icon={solarShield}
              title="Comprehensive Insurance"
              listing1="Covers both third-party liabilities and damages to your own two-wheeler due to accidents, theft, fire, or natural calamities."
              listing2="Offers optional add-ons for enhanced protection."
            />

            <Aboutlisting
              icon={motorCycle}
              title="Standalone Own Damage Cover"
              listing1="Covers only the damages to your own vehicle, without third-party coverage."
              listing2="Ideal for those who already have a valid third-party policy."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
