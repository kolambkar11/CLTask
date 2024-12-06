import React from "react";

const Iplisting = (props) => {
  return (
    <>
      <div className="iplisting-block">
        <div className="inner-block">
          <img src={props.icon} alt="" />
          <div className="iplistingDescription">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iplisting;
