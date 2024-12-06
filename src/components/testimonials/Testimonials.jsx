import React from "react";
import "./testimonials.css";
import testimonials from "../../assets/img/testimonials.png";
import left from "../../assets/img/left-arrow.svg";
import right from "../../assets/img/right-arrow.svg";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <h1 className="heading">See What our customers says</h1>

        <div className="testimonials-block">
          <h1>Excellent Service and Hassle-Free Claims!</h1>
          <p>
            I recently purchased a two-wheeler insurance policy, and I couldn’t
            be happier with my choice! The process was smooth, and the premium
            rates were incredibly affordable. When I had to make a claim due to
            an accident, the team handled everything efficiently, and the
            settlement was completed within days.
          </p>
          <h3>Micheal R.</h3>
          <img src={testimonials} className="testimonial-img" alt="" />
          <div className="left">
            <img src={left} alt="" />
          </div>
          <div className="right">
            <img src={right} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
