import React, { Component } from "react";
import Header from "./components/Header/Header";
import FoodItem from "./components/FoodItem/FoodItem";
import menu from "./commonResource/data";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.allContainer}>
        <Header />
        <div className={styles.foodsContainer}>
          {menu.map((item) => {
            const { id, img, title, price, desc } = item;

            return (
              <FoodItem
                key={id}
                img={img}
                title={title}
                price={price}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
