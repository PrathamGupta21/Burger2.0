import React from "react";
import "./Modal.css";
import Backdrop from "./Backdrop";

const modal = (props) => {
  return (
    <div>
      <Backdrop isModalOpen={props.isModalOpen} closeModal={props.closeModal} />

      <div className="Modal">
        <h6 className="heading">
          You ordered burger with the following ingredients:
        </h6>
        <ul className="list">
          {props.ingredients.map((ingredient) => (
            <li>
              {ingredient.label}: {ingredient.qty}
            </li>
          ))}
        </ul>
        <p className="heading">Total Price: {props.totalPrice + " RS"}</p>
        <p className="list">Do you want to continue?</p>
        <button
          className="btn btn-success btn-sm"
          onClick={props.continuePurchase}
        >
          Continue
        </button>
        &emsp;
        <button className="btn btn-danger btn-sm" onClick={props.closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default modal;
