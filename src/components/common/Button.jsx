import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="btn-primary">{props.textname}</button>
    </>
  );
};

export default Button;
