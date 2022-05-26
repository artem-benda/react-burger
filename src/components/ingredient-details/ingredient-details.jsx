import React from "react";
import styles from "./ingredient-details.module.css";
import { ingredientPropType } from "../../utils/prop-types"

function IngredientDetails(props) {
    return (
        <article className={styles.detailsContainer}>
            <div className="pl-4 pr-4 pb-4">
                <img src={props.ingredient.image_large} alt={props.name} className={styles.ingredientImage} />
            </div>
            <p className="text text_type_main-medium pl-4 pr-4 pb-8">
                {props.ingredient.name}
            </p>
            <div className={styles.enegryValuesContainer}>
                <div className={styles.enegryValueContainer}>
                    <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive pt-5">{props.ingredient.calories}</p>
                </div>
                <div className={styles.enegryValueContainer}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive pt-5">{props.ingredient.proteins}</p>
                </div>
                <div className={styles.enegryValueContainer}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive pt-5">{props.ingredient.fat}</p>
                </div>
                <div className={styles.enegryValueContainer}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive pt-5">{props.ingredient.carbohydrates}</p>
                </div>
            </div>
        </article>
    );
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired
}

export default IngredientDetails
