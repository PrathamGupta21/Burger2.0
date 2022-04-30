import React from "react";
import "./Backdrop.css";

const backdrop = (props) => {
  return (
    <div>
      {props.isModalOpen ? (
        <div className="Backdrop" onClick={props.closeModal}></div>
      ) : null}
    </div>
  );
};

export default backdrop;
