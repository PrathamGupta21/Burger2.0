import React from "react";
import "./Ingr.css";

const Ingr = (props) => {
  return (
    <div className="Ingr">
      <div className="Label">{props.label}</div>
      <button
        disabled={props.disable}
        className="btn btn-secondary"
        onClick={props.removeItems}
      >
        Less
      </button>
      <button className="btn btn-primary" onClick={props.addItems}>
        More
      </button>
    </div>
  );
};

export default Ingr;
