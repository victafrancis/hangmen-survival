import React from "react";
import "./Key.css";

const Key = (props) => {
  return props.isClicked ? (
    <div className="Key disabled">{props.value}</div>
  ) : (
    <div className="Key" onClick={props.keyClickHandler}>{props.value}</div>
  );
};

export default Key;
