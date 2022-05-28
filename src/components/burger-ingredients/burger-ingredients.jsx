import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerIngredients({ ingredients }) {

    const [currentTab, setCurrentTab] = useState("buns");

    const filterIngredientsByType = (ingredients, type) => ingredients.filter(ingredient => ingredient.type === type);
    const bunIngredients = filterIngredientsByType(ingredients, 'bun');
    const sauceIngredients = filterIngredientsByType(ingredients, 'sauce');
    const mainIngredients = filterIngredientsByType(ingredients, 'main');

    return (
        <section className={styles.container}>
            <div className={styles.tabsContainer}>
                <Tab value="buns" active={currentTab === 'buns'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauces" active={currentTab === 'sauces'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="mains" active={currentTab === 'mains'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            <article className={styles.ingredientsContainer + ' custom-scroll'}>
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Булки</p>
                { bunIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Соусы</p>
                { sauceIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Начинки</p>
                { mainIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
            </article>
        </section>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;
