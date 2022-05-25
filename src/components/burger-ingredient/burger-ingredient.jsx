import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './burger-ingredient.module.css'
import PropTypes from "prop-types";

function BurgerIngredient(props) {
    return (
        <article className={styles.container + ' pt-6 pb-10 pl-4 pr-4'}>
            <div className={styles.imageContainer}>
                <img src={props.imageLarge} alt={props.name} className={styles.ingredientImage} />
                <Counter count={1} />
            </div>
            <p className={styles.priceText + ' pt-1'}><span className="text text_type_digits-default pr-1">{props.price}</span> <CurrencyIcon type="primary" /></p>
            <p className={styles.nameText + ' pt-1'}><span className='text text_type_main-default'>{props.name}</span></p>
        </article>
    );
}

BurgerIngredient.propTypes = {
    imageLarge: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default BurgerIngredient;