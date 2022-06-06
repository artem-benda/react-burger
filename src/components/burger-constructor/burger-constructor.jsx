import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_ORDER_DETAILS, placeOrder } from '../../services/actions/burger';

function BurgerConstructor() {

    const bunIngredient = useSelector(store => store.burger.constructorBunIngredient);
    const fillingIngredients = useSelector(store => store.burger.constructorFillingIngredients);

    const totalAmount = useMemo(() => fillingIngredients.map(ingredient => ingredient.price).reduce((a, b) => a + b, 0) +
        ( (bunIngredient && bunIngredient.price) || 0) * 2, [bunIngredient, fillingIngredients]);

    const dispatch = useDispatch();

    const createOrder = () => {
        dispatch(placeOrder());
    }

    const orderDetails = useSelector(store => store.burger.orderDetails);
    const hideOrderDetails = () => {
        dispatch({ type: HIDE_ORDER_DETAILS });
    }

    return (
        <section className={styles.container}>
            { bunIngredient &&
                <article className={styles.fixedContent + ' pr-3 pl-15'}>
                    <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bunIngredient.name} (верх)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image}
                        />
                </article>
            }
            <article className={styles.scrollableContent + ' custom-scroll'}>
                { fillingIngredients.map((ingredient, index) => (
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
            { bunIngredient &&
                <article className={styles.fixedContent + ' pt-2 pr-3 pl-15'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bunIngredient.name} (низ)`}
                        price={bunIngredient.price}
                        thumbnail={bunIngredient.image}
                    />
                </article>
            }
            <article className={styles.fixedContent + ' pt-10 pb-10 pr-4 pl-4'}>
                <span className="text text_type_digits-medium pr-1">{totalAmount}</span>
                <CurrencyIcon type="primary" />
                <span className="ml-4">
                    <Button type="primary" size="medium" onClick={createOrder}>
                        Оформить заказ
                    </Button>
                </span>
            </article>
            { orderDetails &&
                <Modal onDismiss={hideOrderDetails}>
                    <OrderDetails orderDetails={orderDetails} />
                </Modal>
            }
        </section>
    );
}

export default BurgerConstructor
