import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef } from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { hideIngredientDetails, switchTab } from "../../services/actions/burger";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients() {

    const ingredients = useSelector(store => store.burger.availableIngredients);

    const filterIngredientsByType = (ingredients, type) => ingredients.filter(ingredient => ingredient.type === type);
    const bunIngredients = filterIngredientsByType(ingredients, 'bun');
    const sauceIngredients = filterIngredientsByType(ingredients, 'sauce');
    const mainIngredients = filterIngredientsByType(ingredients, 'main');

    const ingredientDetails = useSelector(store => store.burger.ingredientDetails);
    const dispatch = useDispatch();

    const bunTitleRef = useRef(null);
    const sauceTitleRef = useRef(null);
    const mainTitleRef = useRef(null);

    const currentTab = useSelector(store => store.burger.currentTab);
    const setCurrentTab = (tab) => {
        switch(tab) {
            case 'bun': {
                bunTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            case 'sauce': {
                sauceTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            case 'main': {
                mainTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
            default: {}
        }

        if (currentTab !== tab) {
            dispatch(switchTab(tab));
        }
    }

    const hideDetails = () => {
        dispatch(hideIngredientDetails());
    }

    const onScroll = (e) => {
        const bunTitleDistance = Math.abs(bunTitleRef.current.getBoundingClientRect().top);
        const sauceTitleDistance = Math.abs(sauceTitleRef.current.getBoundingClientRect().top);
        const mainTitleDistance = Math.abs(mainTitleRef.current.getBoundingClientRect().top);

        const calculatedTab = (bunTitleDistance <= sauceTitleDistance && bunTitleDistance <= mainTitleDistance) ? 'bun' :
            ((sauceTitleDistance <= bunTitleDistance && sauceTitleDistance <= mainTitleDistance) ? 'sauce' : 'main');
        
        if (currentTab !== calculatedTab) {
            dispatch(switchTab(calculatedTab));
        }

    }

    return (
        <section className={styles.container}>
            <div className={styles.tabsContainer}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            <article className={styles.ingredientsContainer + ' custom-scroll'} onScroll={onScroll}>
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={bunTitleRef}>Булки</p>
                { bunIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={sauceTitleRef}>Соусы</p>
                { sauceIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={mainTitleRef}>Начинки</p>
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
