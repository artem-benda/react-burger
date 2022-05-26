import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import styles from './burger-constructor.module.css'
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor(props) {
    const totalAmount = props.selectedIngredients.map(ingredient => ingredient.price).reduce((a, b) => a + b, 0) +
        ( (props.bunIngredient && props.bunIngredient.price) || 0) * 2;

    const [isShowOrderDetails, setIsShowOrderDetails] = useState(false);

    const showOrderDetails = () => setIsShowOrderDetails(true)

    const hideOrderDetails = () => setIsShowOrderDetails(false)

    return (
        <section className={styles.container}>
            { props.bunIngredient &&
                <article className={styles.fixedContent + ' pr-3 pl-15'}>
                    <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${props.bunIngredient.name} (верх)`}
                            price={props.bunIngredient.price}
                            thumbnail={props.bunIngredient.image}
                        />
                </article>
            }
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
            { props.bunIngredient &&
                <article className={styles.fixedContent + ' pt-2 pr-3 pl-15'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${props.bunIngredient.name} (низ)`}
                        price={props.bunIngredient.price}
                        thumbnail={props.bunIngredient.image}
                    />
                </article>
            }
            <article className={styles.fixedContent + ' pt-10 pb-10 pr-4 pl-4'}>
                <span className="text text_type_digits-medium pr-1">{totalAmount}</span>
                <CurrencyIcon type="primary" />
                <span className="ml-4">
                    <Button type="primary" size="medium" onClick={showOrderDetails}>
                        Оформить заказ
                    </Button>
                </span>
            </article>
            { isShowOrderDetails &&
                <Modal onDismiss={hideOrderDetails}>
                    <OrderDetails orderNumber="12345678" />
                </Modal>
            }
        </section>
    );
}

BurgerConstructor.propTypes = {
    bunIngredient: ingredientPropType.isRequired,
    selectedIngredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerConstructor
