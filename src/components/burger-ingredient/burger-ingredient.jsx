import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './burger-ingredient.module.css'
import { ingredientPropType } from "../../utils/prop-types"
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_INGREDIENT_DETAILS } from "../../services/actions/burger";

function BurgerIngredient({ ingredient }) {
    const dispatch = useDispatch();
    const constructorBunIngredient = useSelector(store => store.burger.constructorBunIngredient);
    const constructorFillingIngredients = useSelector(store => store.burger.constructorFillingIngredients);

    const ingredientsCount = ingredient.type === 'bun' ? (
        constructorBunIngredient?._id === ingredient._id ? 2 : 0
    ) : (
        constructorFillingIngredients.filter(filteringIngredient => filteringIngredient._id === ingredient._id)
            .size
    );

    const showDetails = () => {
        dispatch({type: SHOW_INGREDIENT_DETAILS, payload: ingredient});
    }

    return (
        <article className={styles.container + ' pt-6 pb-10 pl-4 pr-4'} onClick={showDetails}>
            <div className={styles.imageContainer}>
                <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingredientImage} />
                { ingredientsCount &&
                    <Counter count={ingredientsCount} />
                }
            </div>
            <p className={styles.priceText + ' pt-1'}><span className="text text_type_digits-default pr-1">{ingredient.price}</span> <CurrencyIcon type="primary" /></p>
            <p className={styles.nameText + ' pt-1'}><span className='text text_type_main-default'>{ingredient.name}</span></p>
        </article>
    );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType
}

export default BurgerIngredient;