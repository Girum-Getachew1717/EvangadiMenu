import React, { Component } from "react";
import styles from "./FoodItem.module.css";

class FoodItem extends Component {
  render() {
    const { img, title, price, desc } = this.props;

    return (
      <div className={styles.singleFood}>
        <div className={styles.img}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.titlePrice}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className={styles.foodDesc}>{desc}</div>
      </div>
    );
  }
}

export default FoodItem;
