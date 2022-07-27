import { FC } from "react";
import styles from './burger-order.module.css';
import { IOrder } from '../../services/types/burger';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IBurgerOrderProps {
    readonly order: IOrder;
    readonly isIncludeStatus: boolean;
}

const BurgerOrder: FC<IBurgerOrderProps> = ({order, isIncludeStatus}) => {

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

    return (
        <article className={styles.burgerOrderCard}>
            <p>
                <span className="text text_type_main-default">#{order.number}</span>
                <span className="text text_type_digits-default text_color_inactive pull-right">{order.createdAt}</span>
            </p>
            <p className="text text_type_main-medium pt-6">{order.name}</p>
            { isIncludeStatus &&
                <p className="pt-2">order.status</p>
            }
            <div className={styles.ingredientsRow + " pt-6"}>
                <div className={styles.ingredientIcons}>
                    { order.ingredients.slice(0, maxShowedIngredients + 1).map((ingredient, index) => (
                        <img className={`${styles.ingredientIcon} ${getIngredientIconStyle(index)}`} src={ingredient.image} key={index} alt={ingredient.name} />
                    ))}
                    { order.ingredients.length > maxShowedIngredients &&
                        <div>
                            <img 
                                className={`${styles.ingredientIcon} ${getIngredientIconStyle(maxShowedIngredients)}`} 
                                src={order.ingredients[maxShowedIngredients].image} 
                                alt={order.ingredients[maxShowedIngredients].name} 
                                />
                            <span className={styles.centered}>+{order.ingredients.length - maxShowedIngredients}</span>
                        </div>
                    }
                </div>
                <div>
                    <span className="text text_type_digits-medium pr-1">{order.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </article>
    )
}

export default BurgerOrder;