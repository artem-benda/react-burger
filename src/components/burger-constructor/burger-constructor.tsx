import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { SyntheticEvent, useEffect, useMemo } from 'react';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { addIngredientToConstructor, hideOrderDetails as hideOrderDetailsAction, placeOrderThunk } from '../../services/actions/burger';
import { useDrop } from 'react-dnd';
import DraggableConstructorIngredient from '../draggable-constructor-ingredient/draggable-constructor-ingredient';
import { useHistory, useLocation } from 'react-router-dom';
import { getUser } from '../../utils/data';
import { getUserFailed, getUserSuccess } from '../../services/actions/auth';
import { IOrderableIngredient, TDraggedObject } from '../../utils/types';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

// Fix ошибки ts для компонентов yandex
declare module 'react' {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    }
}

function BurgerConstructor() {
    const history = useHistory();
    const location = useLocation();

    const availableIngredients = useAppSelector(store => store.burger.availableIngredients);
    const bunIngredient = useAppSelector(store => store.burger.constructorBunIngredient);
    const fillingIngredients = useAppSelector(store => store.burger.constructorFillingIngredients);
    const { placeOrderRequest, placeOrderFailed } = useAppSelector(store => store.burger);
    const user = useAppSelector(store => store.auth.user);
    const orderDetails = useAppSelector(store => store.burger.orderDetails);

    const totalAmount = useMemo<number>(() => fillingIngredients.map(ingredient => ingredient.price).reduce((a, b) => a + b, 0) +
        ( (bunIngredient && bunIngredient.price) || 0) * 2, [bunIngredient, fillingIngredients]);

    const dispatch = useAppDispatch();

    const init = async () => {
        await getUser()
          .then((data) => {
            dispatch(getUserSuccess(data));
          })
          .catch(() => {
            dispatch(getUserFailed());
          })
      };
    
      useEffect(() => {
        init();
        // eslint-disable-next-line
      }, []);

    const createOrder = (e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (user) {
            dispatch(placeOrderThunk());
        } else {
            history.replace({ pathname: '/login', state: { from: location.pathname }});
        }
    }
    
    const hideOrderDetails = () => {
        dispatch(hideOrderDetailsAction());
    }

    const onDropIngredient = (itemId: string) => {
        const item = availableIngredients.filter(ingredient => ingredient._id === itemId).shift();
        if (!!item) {
            dispatch(addIngredientToConstructor(item));
        }
    }

    const [, dropTarget] = useDrop({
        accept: 'availableIngredient',
        drop(item: TDraggedObject) {
            onDropIngredient(item.id);
        }
    });

    return (
        <section className={`${styles.container} burger-constructor-drop-zone`} ref={dropTarget}>
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
                    { fillingIngredients.map((ingredient: IOrderableIngredient) => (
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
            { placeOrderFailed &&
                <article className={styles.fixedContent + ' pt-2 pr-3 pl-15'}>
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось оформить заказ. Обратитесь в службу поддержки.
                    </p>
                </article>
            }
            <article className={styles.fixedContent + ' pt-10 pb-10 pr-4 pl-4 burger-constructor-totals-container ' + styles.totals}>
                <span className="text text_type_digits-medium pr-1">{totalAmount}</span>
                <CurrencyIcon type="primary" />
                <span className="ml-4 mr-3">
                    <Button type="primary" size="medium" onClick={createOrder}>
                        { placeOrderRequest ? "Оформляем заказ..." : 'Оформить заказ' }
                    </Button>
                </span>
            </article>
            { orderDetails &&
                <Modal onDismiss={hideOrderDetails}>
                    <OrderDetails order={orderDetails} />
                </Modal>
            }
        </section>
    );
}

export default BurgerConstructor;