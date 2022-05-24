import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './burger-constructor.module.css'
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

class BurgerConstructor extends React.Component {
    render() {
        const totalAmount = this.props.selectedIngredients.map(ingredient => ingredient.price).reduce((a, b) => a + b, 0) +
            this.props.bunIngredient.price * 2

        return (
            <section className={styles.container}>
                <article className={styles.fixedContent + ' pr-10 pl-15'}>
                    <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${this.props.bunIngredient.name} (верх)`}
                            price={this.props.bunIngredient.price}
                            thumbnail={this.props.bunIngredient.image}
                        />
                </article>
                <article className={styles.scrollableContent + ' custom-scroll'}>
                    { this.props.selectedIngredients.map((ingredient, index) => (
                        <span key={index}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </span>
                    ))}
                </article>
                <article className={styles.fixedContent + ' pt-2 pr-10 pl-15'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${this.props.bunIngredient.name} (низ)`}
                        price={this.props.bunIngredient.price}
                        thumbnail={this.props.bunIngredient.image}
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
        )
    }
}

BurgerConstructor.propTypes = {
    bunIngredient: ingredientPropType.isRequired,
    selectedIngredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerConstructor
