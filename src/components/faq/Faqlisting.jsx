import React from "react";

const Faqlisting = (props) => {
  return (
    <>
      <div className="block">
        <h3>
          {props.details.question}
          <span className="fl-right">-</span>
        </h3>
        <p>{props.details.answer}</p>
        {props.details.list != undefined ? (
          <>
            {props.details.list.map((l, index) => {
              return <li key={index}>{l}</li>;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Faqlisting;
