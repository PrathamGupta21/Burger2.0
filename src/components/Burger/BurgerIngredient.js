import React, { Component } from "react";
import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;

      case "bread-top":
        ingredient = <div className="BreadTop"></div>;
        break;

      case "alooTikki":
        ingredient = <div className="AlooTikki"></div>;
        break;

      case "paneer":
        ingredient = <div className="Paneer"></div>;
        break;

      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
        
      case "tomato":
        ingredient = <div className="Tomato"></div>;
        break;

      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default BurgerIngredient;
