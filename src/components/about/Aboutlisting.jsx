import React from "react";

const Aboutlisting = (props) => {
  return (
    <>
      <div className="aboutlisting">
        <img src={props.icon} alt="" />
        <div className="aboutlistinfDescription">
          <h1>{props.title}</h1>
          <ul>
            <li>{props.listing1}</li>
            <li>{props.listing2}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aboutlisting;
