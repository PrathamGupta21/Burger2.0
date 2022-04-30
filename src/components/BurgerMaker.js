import React, { Component } from "react";
import Burger from "./Burger/Burger";
import IngrBlock from "./Burger/IngrBlock";
import Modal from "./Modal/Modal";
import NavBar from "./NavBar/NavBar";

class BurgerMaker extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [
        {
          name: "alooTikki",
          label: "AlooTikki (10 Rs)",
          qty: 0,
          price: 10,
          disable: true,
        },
        {
          name: "paneer",
          label: "Paneer (15 Rs)",
          qty: 0,
          price: 15,
          disable: true,
        },
        {
          name: "cheese",
          label: "Cheese (10 Rs)",
          qty: 0,
          price: 10,
          disable: true,
        },
      ],
      totalPrice: 20,
      isModalOpen: false,
    };

    this.addItems = (type) => {
      const updatedIngredients = this.state.ingredients.map((ingredient) => {
        if (ingredient.name === type) {
          ingredient.qty++;
          ingredient.disable = false;
          this.setState({
            totalPrice: this.state.totalPrice + ingredient.price,
          });
        }
        return ingredient;
      });

      this.setState({
        ingredients: [].concat(updatedIngredients),
      });
    };

    this.removeItems = (type) => {
      const updatedIngredients = this.state.ingredients.map((ingredient) => {
        if (ingredient.name === type) {
          if (ingredient.qty > 0) {
            ingredient.qty--;
            ingredient.disable = false;
            this.setState({
              totalPrice: this.state.totalPrice - ingredient.price,
            });
          }
          if (ingredient.qty === 0) {
            ingredient.disable = true;
          }
        }
        return ingredient;
      });

      this.setState({
        ingredients: [].concat(updatedIngredients),
      });
    };

    this.openModal = () => {
      this.setState({ isModalOpen: true });
    };

    this.closeModal = () => {
      this.setState({ isModalOpen: false });
    };

    this.continuePurchase = () => {
      alert("You Purchased Burger");
      this.setState({
        ingredients: [
          {
            name: "alooTikki",
            label: "AlooTikki (10 Rs)",
            qty: 0,
            price: 10,
            disable: true,
          },
          {
            name: "paneer",
            label: "Paneer (15 Rs)",
            qty: 0,
            price: 15,
            disable: true,
          },
          {
            name: "cheese",
            label: "Cheese (10 Rs)",
            qty: 0,
            price: 10,
            disable: true,
          },
        ],
        totalPrice: 20,
        isModalOpen: false,
      });
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.isModalOpen ? (
          <Modal
            ingredients={this.state.ingredients}
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            continuePurchase={this.continuePurchase}
            totalPrice={this.state.totalPrice}
          />
        ) : null}
        <Burger ingredients={this.state.ingredients} />
        <IngrBlock
          removeItems={this.removeItems}
          addItems={this.addItems}
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          openModal={this.openModal}
        />
      </div>
    );
  }
}

export default BurgerMaker;
