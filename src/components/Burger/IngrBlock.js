import React from "react";
import "./IngrBlock.css";
import Ingr from "./Ingr";

const IngrBlock = (props) => {
  return (
    <div className="IngrBlock">
      <h5 className="price">💰Current Price: {props.totalPrice + " Rs💰"}</h5>
      {props.ingredients.map((ingr) => (
        <Ingr
          key={ingr.name}
          label={ingr.label}
          addItems={() => props.addItems(ingr.name)}
          removeItems={() => props.removeItems(ingr.name)}
          disable={ingr.disable}
        />
      ))}
      <button
        disabled={props.totalPrice === 10}
        className="btn btn-success btn-lg"
        onClick={props.openModal}
      >
        Order Now 😋
      </button>
    </div>
  );
};

export default IngrBlock;
