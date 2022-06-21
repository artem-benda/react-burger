import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredient.module.css'
import { ingredientPropType } from "../../utils/prop-types"
import { useDispatch, useSelector } from 'react-redux';
import { showIngredientDetails } from "../../services/actions/burger";
import { useDrag } from "react-dnd";

function BurgerIngredient({ ingredient }) {
    const dispatch = useDispatch();
    const constructorBunIngredient = useSelector(store => store.burger.constructorBunIngredient);
    const constructorFillingIngredients = useSelector(store => store.burger.constructorFillingIngredients);

    const ingredientsCount = ingredient.type === 'bun' ? (
        constructorBunIngredient?._id === ingredient._id ? 2 : 0
    ) : (
        constructorFillingIngredients.filter(filteringIngredient => filteringIngredient._id === ingredient._id)
            .length
    );

    const showDetails = () => {
        dispatch(showIngredientDetails(ingredient));
    }

    const [{opacity}, ref] = useDrag({
        type: 'availableIngredient',
        item: { id: ingredient._id },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    return (
        <article className={styles.container + ' pt-6 pb-10 pl-4 pr-4'} onClick={showDetails} style={{opacity}} ref={ref}>
            <div className={styles.imageContainer}>
                <img src={ingredient.image_large} alt={ingredient.name} className={styles.ingredientImage} />
                { ingredientsCount > 0 &&
                    <Counter count={ingredientsCount} />
                }
            </div>
            <p className={styles.priceText + ' pt-1'}><span className="text text_type_digits-default pr-1">{ingredient.price}</span> <CurrencyIcon type="primary" /></p>
            <p className={styles.nameText + ' pt-1'}><span className='text text_type_main-default'>{ingredient.name}</span></p>
        </article>
    );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType
}

export default BurgerIngredient;