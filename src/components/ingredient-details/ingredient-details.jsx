import React from "react";
import styles from "./ingredient-details.module.css";
import { ingredientPropType } from "../../utils/prop-types"
import IngredientFoodValue from "../ingredient-food-value/ingredient-food-value";

function IngredientDetails({ ingredient }) {
    return (
        <article className={styles.detailsContainer}>
            <div className="pl-4 pr-4 pb-4">
                <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingredientImage} />
            </div>
            <p className="text text_type_main-medium pl-4 pr-4 pb-8">
                {ingredient.name}
            </p>
            <div className={styles.enegryValuesContainer}>
                <IngredientFoodValue name="Калории, ккал" value={ingredient.calories} />
                <IngredientFoodValue name="Белки, г" value={ingredient.proteins} />
                <IngredientFoodValue name="Жиры, г" value={ingredient.fat} />
                <IngredientFoodValue name="Углеводы, г" value={ingredient.carbohydrates} />
            </div>
        </article>
    );
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired
}

export default IngredientDetails
