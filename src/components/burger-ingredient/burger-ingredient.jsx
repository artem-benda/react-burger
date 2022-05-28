import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from './burger-ingredient.module.css'
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientPropType } from "../../utils/prop-types"

function BurgerIngredient({ ingredient }) {

    const [isShowDetails, setIsShowDetails] = useState(false);

    const showDetails = () => {
        setIsShowDetails(true)
    }

    const hideDetails = () => {
        setIsShowDetails(false)
    }

    return (
        <article className={styles.container + ' pt-6 pb-10 pl-4 pr-4'} onClick={showDetails}>
            <div className={styles.imageContainer}>
                <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingredientImage} />
                <Counter count={1} />
            </div>
            <p className={styles.priceText + ' pt-1'}><span className="text text_type_digits-default pr-1">{ingredient.price}</span> <CurrencyIcon type="primary" /></p>
            <p className={styles.nameText + ' pt-1'}><span className='text text_type_main-default'>{ingredient.name}</span></p>
            { isShowDetails &&
                <Modal title="Детали ингредиента" onDismiss={hideDetails}>
                    <IngredientDetails ingredient={ingredient} />
                </Modal>
            }
        </article>
    );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType
}

export default BurgerIngredient;