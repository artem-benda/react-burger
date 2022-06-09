import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_INGREDIENT_TO_CONSTRUCTOR, HIDE_ORDER_DETAILS, placeOrder } from '../../services/actions/burger';
import { useDrop } from 'react-dnd';
import DraggableConstructorIngredient from '../draggable-constructor-ingredient/draggable-constructor-ingredient';

function BurgerConstructor() {

    const availableIngredients = useSelector(store => store.burger.availableIngredients);

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

    const onDropIngredient = (itemId) => {
        const item = availableIngredients.filter(ingredient => ingredient._id === itemId).shift();
        dispatch({
            type: ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: item
        })
    }

    const [, dropTarget] = useDrop({
        accept: 'availableIngredient',
        drop(item) {
            onDropIngredient(item.id);
        }
    });

    return (
        <section className={styles.container} ref={dropTarget}>
            <article className={styles.fixedContent + ' pr-3 pl-15'}>
                { bunIngredient ?
                    <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bunIngredient.name} (верх)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image}
                        /> : 
                    <div className={styles.topBunDropZone}></div>
                }
            </article>
            { fillingIngredients.length > 0 ? 
                <article className={styles.scrollableContent + ' custom-scroll pr-2'}>
                    { fillingIngredients.map((ingredient) => (
                        <DraggableConstructorIngredient ingredient={ingredient} key={ingredient.generatedId} />
                    ))}
                </article> :
                <div className={styles.fillingIngredientsDropZone + ' ml-20 mt-2 mr-5'}></div>
            }
                <article className={styles.fixedContent + ' pt-2 pr-3 pl-15'}>
                    { bunIngredient ?
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bunIngredient.name} (низ)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image}
                        /> :
                        <div className={styles.bottomBunDropZone}></div>
                    }
                </article>
            <article className={styles.fixedContent + ' pt-10 pb-10 pr-4 pl-4 ' + styles.totals}>
                <span className="text text_type_digits-medium pr-1">{totalAmount}</span>
                <CurrencyIcon type="primary" />
                <span className="ml-4 mr-3">
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
