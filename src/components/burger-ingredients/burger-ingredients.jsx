import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerIngredients(props) {

    const [currentTab, setCurrentTab] = useState("buns");

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
                { props.ingredients.some(ingredient => ingredient.type === 'bun') &&
                    <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Булки</p>
                }
                { props.ingredients.filter(ingredient => ingredient.type === 'bun').map((ingredient) => {
                    return (
                        <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
                    )
                })}
                { props.ingredients.some(ingredient => ingredient.type === 'sauce') &&
                    <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Соусы</p>
                }
                { props.ingredients.filter(ingredient => ingredient.type === 'sauce').map((ingredient) => {
                    return (
                        <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
                    )
                })}
                { props.ingredients.some(ingredient => ingredient.type === 'main') &&
                    <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Начинки</p>
                }
                { props.ingredients.filter(ingredient => ingredient.type === 'main').map((ingredient) => {
                    return (
                        <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
                    )
                })}
            </article>
        </section>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;
