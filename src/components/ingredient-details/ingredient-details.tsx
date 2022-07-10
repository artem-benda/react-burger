import React, { useEffect, useMemo } from "react";
import styles from "./ingredient-details.module.css";
import IngredientFoodValue from "../ingredient-food-value/ingredient-food-value";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/actions/burger";
import { IIngredient } from "../../utils/types";

interface IIngredientParams {
    id: string
}

function IngredientDetails() {
    const { id } = useParams<IIngredientParams>();
    const dispatch = useDispatch();
    // TODO типизировать REDUX в 5 спринте. Временно используем any.
    const availableIngredients: Array<IIngredient> = useSelector(store => (store as any).burger.availableIngredients);
    const ingredient = useMemo(() => availableIngredients.filter(ingredient => ingredient._id === id).shift(), [id, availableIngredients]);
    useEffect(() => {
        if (!ingredient) {
            // TODO типизировать REDUX THUNK в 5 спринте. Временно используем any.
            dispatch(fetchIngredients() as any);
        }
    }, [dispatch, ingredient]);

    if (!ingredient) {
        return null;
    }

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

export default IngredientDetails;
