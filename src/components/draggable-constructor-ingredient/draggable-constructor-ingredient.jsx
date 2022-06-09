import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-ingredient.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientPropType } from "../../utils/prop-types";
import { MOVE_INGREDIENT_IN_CONSTRUCTOR, REMOVE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/burger';
import { useDrag, useDrop } from 'react-dnd';

function DraggableConstructorIngredient({ ingredient }) {

    const dispatch = useDispatch();
    const fillingIngredients = useSelector(store => store.burger.constructorFillingIngredients);

    const onRemoveIngredient = (generatedId) => {
        dispatch({
            type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: generatedId
        })
    }

    const [{ display }, dragRef] = useDrag({
        type: 'reorderableIngredient',
        item: { generatedId: ingredient.generatedId },
        collect: monitor => ({
            display: monitor.isDragging() ? 'none' : 'flex'
        })
    });

    const onDropIngredient = (generatedId) => {
        const droppedIngredient = fillingIngredients.filter(searchedIngredient => searchedIngredient.generatedId === generatedId).shift();
        dispatch({
            type: MOVE_INGREDIENT_IN_CONSTRUCTOR,
            payload: { 
                shiftedGeneratedId: ingredient.generatedId,
                droppedIngredient: droppedIngredient
            }
        })
    }

    const [ { isOver }, dropTarget] = useDrop({
        accept: 'reorderableIngredient',
        drop(item) {
            onDropIngredient(item.generatedId);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    function attachRef(el) {
        dropTarget(el);
        dragRef(el);
    }

    return (
        <div key={ingredient.generatedId} className={styles.ingredientItemContainer + ' ' + (isOver ? ' pt-10' : '')} ref={attachRef} style={{display}}>
            <DragIcon type="primary" />
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
    ingredient: ingredientPropType.isRequired
}

export default DraggableConstructorIngredient;
