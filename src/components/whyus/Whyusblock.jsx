import React from "react";

const Whyusblock = (props) => {
  return (
    <>
      <div className="text-center">
        <div className="iconsBlock">
          <img src={props.icon} alt="" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Whyusblock;
