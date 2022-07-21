import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredient.module.css';
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../utils/types";
import { FC } from "react";
import { useAppSelector } from "../../hooks/use-app-selector";

interface IBurgerIngredientProps {
    ingredient: IIngredient
}

const BurgerIngredient: FC<IBurgerIngredientProps> = ({ ingredient }) => {
    const constructorBunIngredient = useAppSelector(store => store.burger.constructorBunIngredient);
    const constructorFillingIngredients = useAppSelector(store => store.burger.constructorFillingIngredients);
    const location = useLocation();

    const ingredientsCount = ingredient.type === 'bun' ? (
        constructorBunIngredient?._id === ingredient._id ? 2 : 0
    ) : (
        constructorFillingIngredients.filter(filteringIngredient => filteringIngredient._id === ingredient._id)
            .length
    );

    const [{opacity}, ref] = useDrag({
        type: 'availableIngredient',
        item: { id: ingredient._id },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    return (
        
        <article className={styles.container + ' pt-6 pb-10 pl-4 pr-4'} style={{opacity}} ref={ref}>
            <Link to={{
                pathname: `/ingredients/${ingredient._id}`,
                // This is the trick! This link sets
                // the `background` in location state.
                state: { background: location }
            }}>
                <div className={styles.imageContainer}>
                    <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingredientImage} />
                    { ingredientsCount > 0 &&
                        <Counter count={ingredientsCount} />
                    }
                </div>
                <p className={styles.priceText + ' pt-1'}><span className="text text_type_digits-default pr-1">{ingredient.price}</span> <CurrencyIcon type="primary" /></p>
                <p className={styles.nameText + ' pt-1'}><span className='text text_type_main-default'>{ingredient.name}</span></p>
            </Link>
        </article>
        
    );
}

export default BurgerIngredient;