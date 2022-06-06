import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_INGREDIENT_DETAILS } from "../../services/actions/burger";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients() {

    const ingredients = useSelector(store => store.burger.availableIngredients);
    const [currentTab, setCurrentTab] = useState("buns");

    const filterIngredientsByType = (ingredients, type) => ingredients.filter(ingredient => ingredient.type === type);
    const bunIngredients = filterIngredientsByType(ingredients, 'bun');
    const sauceIngredients = filterIngredientsByType(ingredients, 'sauce');
    const mainIngredients = filterIngredientsByType(ingredients, 'main');

    const ingredientDetails = useSelector(store => store.burger.ingredientDetails);
    const dispatch = useDispatch();

    const hideDetails = () => {
        dispatch({type: HIDE_INGREDIENT_DETAILS});
    }

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
            { ingredientDetails &&
                <Modal title="Детали ингредиента" onDismiss={hideDetails}>
                    <IngredientDetails ingredient={ingredientDetails} />
                </Modal>
            }
        </section>
    );
}

export default BurgerIngredients;
