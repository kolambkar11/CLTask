import React from "react";
import applyBtn from "../../assets/img/apply-btn-icon.svg";
import viewMore from "../../assets/img/btn-arrow.svg";
const Viewbtn = (props) => {
  return (
    <button className={props.cls}>
      {props.title} <img src={viewMore} className="viewMoreBtn" alt="" />
    </button>
  );
};

export default Viewbtn;
