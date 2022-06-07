import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-ingredient.module.css';
import { useDispatch } from 'react-redux';
import { ingredientWithGeneratedIdPropType } from "../../utils/prop-types";
import { REMOVE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/burger';

function DraggableConstructorIngredient({ ingredient }) {

    const dispatch = useDispatch();

    const onRemoveIngredient = (generatedId) => {
        dispatch({
            type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: generatedId
        })
    }

    return (
        <div key={ingredient.generatedId} className={styles.ingredientItemContainer}>
            <DragIcon type="primary"/>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => onRemoveIngredient(ingredient.generatedId)}
            />
        </div>
    );
}

DraggableConstructorIngredient.propTypes = {
    ingredient: ingredientWithGeneratedIdPropType.isRequired
}

export default DraggableConstructorIngredient;
