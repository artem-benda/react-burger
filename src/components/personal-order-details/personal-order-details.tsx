import { useMemo, useEffect } from 'react';
import styles from './personal-order-details.module.css';
import { IOrder } from '../../services/types/burger';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { myOrdersConnect, myOrdersDisonnect } from '../../services/actions/order';
import { IIngredient } from '../../utils/types';
import { fetchIngredientsThunk } from '../../services/actions/burger';
import { mapOrderStatus } from '../../utils/mapper';
import IngredientIcon from '../ingredient-icon/ingredient-icon';

interface IPersonalOrderDetailsParams {
    id: string
}

function PersonalOrderDetails() {
    const { id } = useParams<IPersonalOrderDetailsParams>();
    const dispatch = useAppDispatch();
    const myOrders: Array<IOrder> = useAppSelector(store => store.myOrders.myOrders.orders);
    const order = useMemo(() => myOrders.filter(order => order._id === id).shift(), [id, myOrders]);
    useEffect(() => {
        if (!order) {
            dispatch(myOrdersConnect());
            return () => {
                dispatch(myOrdersDisonnect());
            }
        }
    }, [dispatch, order]);

    const availableIngredients: ReadonlyArray<IIngredient> = useAppSelector(store => store.burger.availableIngredients);
    useEffect(() => {
        if (availableIngredients.length === 0) {
            dispatch(fetchIngredientsThunk());
        }
    }, [dispatch, availableIngredients]);

    const ingredientsMap = useMemo(() => new Map(availableIngredients.map(obj => [obj._id, obj])), [availableIngredients]);
    const orderPrice = useMemo(() => ingredientsMap.size > 0 && order && order.ingredients.reduce((acc, ingredient) => acc + ingredientsMap.get(ingredient)!.price, 0), [order, ingredientsMap]);


    if (availableIngredients.length === 0 || !order) {
        return null;
    }

    return (
        <article className={styles.detailsContainer}>
            <p className={styles.centeredContents}>
                <span className="text text_type_main-default">#{order.number}</span>
            </p>
            <p className="text text_type_main-medium pt-10">{order.name}</p>
            <p className="text text_type_main-default pt-3">{mapOrderStatus(order.status)}</p>
            <p className="text text_type_main-medium pt-15">Состав:</p>
            <div className={styles.orderContents + " pt-6"}>
                { order.ingredients.map( (ingredient, index) => (
                    <div className={styles.orderContentsItem + " pt-6"} key={index}>
                        <div>
                            <IngredientIcon
                                imageUrl={ingredientsMap.get(ingredient)!.image_mobile}
                                />
                        </div>
                        <div className={styles.orderContentsItemName}>
                            <span className='pl-4 text text_type_main-default pr-4'>{ingredientsMap.get(ingredient)!.name}</span>
                        </div>
                        <div>
                            <span className="text text_type_digits-medium pr-1">{ingredientsMap.get(ingredient)!.price}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.orderContentsItem + " pt-6"}>
                <span className="text text_type_digits-default text_color_inactive pull-right">{order.createdAt}</span>
                <span className={styles.orderContentsItemName}></span>
                <span className="pull-right">
                    <span className="text text_type_digits-medium pr-1">{orderPrice}</span>
                    <CurrencyIcon type="primary" />
                </span>
            </div>
        </article>
    )
}

export default PersonalOrderDetails;