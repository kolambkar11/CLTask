import React from "react";

const Policy = (props) => {
  return (
    <>
      <div className="in-block">
        <h1 className="heading">
          <span className={`number ${props.cls}`}>
            <span>{props.id}</span>{" "}
          </span>
          <span className={`title ${props.cls}`}>{props.title}</span>
        </h1>
        <p className="description">{props.desc}</p>
      </div>
    </>
  );
};

export default Policy;
