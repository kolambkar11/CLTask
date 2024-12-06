import React from "react";

const Rightblock = (props) => {
  return (
    <>
      <div className="desc">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Rightblock;
