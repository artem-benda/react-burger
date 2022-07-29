import { FC, useEffect, useMemo } from "react";
import styles from './burger-order.module.css';
import { IOrder } from '../../services/types/burger';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from "../../utils/types";
import { useAppSelector } from "../../hooks/use-app-selector";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { fetchIngredientsThunk } from "../../services/actions/burger";
import { Link, useLocation } from "react-router-dom";
import { mapOrderStatus } from "../../utils/mapper";
import IngredientIcon from "../ingredient-icon/ingredient-icon";

interface IBurgerOrderProps {
    readonly order: IOrder;
    readonly isPersonal: boolean;
}

const BurgerOrder: FC<IBurgerOrderProps> = ({order, isPersonal}) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const availableIngredients: ReadonlyArray<IIngredient> = useAppSelector(store => store.burger.availableIngredients);
    useEffect(() => {
        if (availableIngredients.length === 0) {
            dispatch(fetchIngredientsThunk());
        }
    }, [dispatch, availableIngredients]);

    const ingredientsMap = useMemo(() => new Map(availableIngredients.map(obj => [obj._id, obj])), [availableIngredients]);
    const orderPrice = useMemo(() => ingredientsMap.size > 0 && order.ingredients.reduce((acc, ingredient) => acc + ingredientsMap.get(ingredient)!.price, 0), [order, ingredientsMap]);

    const maxShowedIngredients = 5;

    const getIngredientIconStyle = (index: number) => {
        switch(index) {
            case 0: return styles.ingredientIcon1;
            case 1: return styles.ingredientIcon2;
            case 2: return styles.ingredientIcon3;
            case 3: return styles.ingredientIcon4;
            case 4: return styles.ingredientIcon5;
            default: return styles.ingredientIcon6;
        }
    }

    if (availableIngredients.length === 0) {
        return null;
    }

    return (
        <article className={styles.burgerOrderCard}>
            <Link to={{
                pathname: isPersonal ? `/profile/orders/${order._id}` : `/feed/${order._id}`,
                // This is the trick! This link sets
                // the `background` in location state.
                state: { background: location }
            }}>
                <p>
                    <span className="text text_type_digits-default">#{order.number}</span>
                    <span className="text text_type_digits-default text_color_inactive pull-right">{order.createdAt}</span>
                </p>
                <p className="text text_type_main-medium pt-6">{order.name}</p>
                { isPersonal &&
                    <p className="pt-2">{mapOrderStatus(order.status)}</p>
                }
                <div className={styles.ingredientsRow + " pt-6"}>
                    <div className={styles.ingredientIcons}>
                        { order.ingredients.slice(0, maxShowedIngredients).map((ingredient, index) => (
                            <IngredientIcon
                                key={index}
                                imageUrl={ingredientsMap.get(ingredient)!.image_mobile}
                                className={getIngredientIconStyle(index)}
                                />
                        ))}
                        { order.ingredients.length > maxShowedIngredients &&
                            <div className={styles.otherIngredients}>
                                <IngredientIcon
                                    imageUrl={ingredientsMap.get(order.ingredients[maxShowedIngredients])!.image_mobile}
                                    className={getIngredientIconStyle(maxShowedIngredients)}
                                    />
                                <span className={`${styles.centered} ${styles.countOthers} text text_type_digits-default`}>+{order.ingredients.length - maxShowedIngredients}</span>
                            </div>
                        }
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-1">{orderPrice}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BurgerOrder;