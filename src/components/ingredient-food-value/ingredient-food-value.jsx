import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-food-value.module.css";

function IngredientFoodValue({ name, value }) {
    return (
        <div className={styles.enegryValueContainer}>
            <p className="text text_type_main-default text_color_inactive">{name}</p>
            <p className="text text_type_digits-default text_color_inactive pt-5">{value}</p>
        </div>
    );
}

IngredientFoodValue.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default IngredientFoodValue;