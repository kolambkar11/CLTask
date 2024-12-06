import React from "react";

const Policy = (props) => {
  console.log(props);

  return (
    <>
      <div className="in-block">
        <h1 className="heading">
          <span className="number">
            <span>{props.id}</span>{" "}
          </span>
          <span className="title">{props.title}</span>
        </h1>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Policy;
