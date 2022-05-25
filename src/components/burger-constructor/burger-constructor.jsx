import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './burger-constructor.module.css'
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerConstructor(props) {
    const totalAmount = props.selectedIngredients.map(ingredient => ingredient.price).reduce((a, b) => a + b, 0) +
        props.bunIngredient.price * 2

    return (
        <section className={styles.container}>
            <article className={styles.fixedContent + ' pr-3 pl-15'}>
                <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${props.bunIngredient.name} (верх)`}
                        price={props.bunIngredient.price}
                        thumbnail={props.bunIngredient.image}
                    />
            </article>
            <article className={styles.scrollableContent + ' custom-scroll'}>
                { props.selectedIngredients.map((ingredient, index) => (
                    <div key={index} className={styles.ingredientItemContainer}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                ))}
            </article>
            <article className={styles.fixedContent + ' pt-2 pr-3 pl-15'}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${props.bunIngredient.name} (низ)`}
                    price={props.bunIngredient.price}
                    thumbnail={props.bunIngredient.image}
                />
            </article>
            <article className={styles.fixedContent + ' pt-10 pb-10 pr-4 pl-4'}>
                <span className="text text_type_digits-medium pr-1">{totalAmount}</span>
                <CurrencyIcon type="primary" />
                <span className="ml-4">
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </span>
            </article>
        </section>
    );
}

BurgerConstructor.propTypes = {
    bunIngredient: ingredientPropType.isRequired,
    selectedIngredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerConstructor
