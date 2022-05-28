import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

class BurgerIngredients extends React.Component {
    state = { current: "buns" }
    onSelectTab = ( tabName ) => {
        this.setState({ current: tabName })
    }
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.tabsContainer}>
                    <Tab value="buns" active={this.state.current === 'buns'} onClick={this.onSelectTab}>
                        Булки
                    </Tab>
                    <Tab value="sauces" active={this.state.current === 'sauces'} onClick={this.onSelectTab}>
                        Соусы
                    </Tab>
                    <Tab value="mains" active={this.state.current === 'mains'} onClick={this.onSelectTab}>
                        Начинки
                    </Tab>
                </div>
                <article className={styles.ingredientsContainer + ' custom-scroll'}>
                    { this.props.ingredients.some(ingredient => ingredient.type === 'bun') &&
                        <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Булки</p>
                    }
                    { this.props.ingredients.filter(ingredient => ingredient.type === 'bun').map((ingredient, index) => {
                        const {image_large, price, name} = ingredient;
                        return (
                            <BurgerIngredient key={index} imageLarge={image_large} price={price} name={name} />
                        )
                    })}
                    { this.props.ingredients.some(ingredient => ingredient.type === 'sauce') &&
                        <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Соусы</p>
                    }
                    { this.props.ingredients.filter(ingredient => ingredient.type === 'sauce').map((ingredient, index) => {
                        const {image_large, price, name} = ingredient;
                        return (
                            <BurgerIngredient key={index} imageLarge={image_large} price={price} name={name} />
                        )
                    })}
                    { this.props.ingredients.some(ingredient => ingredient.type === 'main') &&
                        <p className={styles.typeTitle + ' text text_type_main-medium pt-10'}>Начинки</p>
                    }
                    { this.props.ingredients.filter(ingredient => ingredient.type === 'main').map((ingredient, index) => {
                        const {image_large, price, name} = ingredient;
                        return (
                            <BurgerIngredient key={index} imageLarge={image_large} price={price} name={name} />
                        )
                    })}
                </article>
            </section>
        )
    }
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;
