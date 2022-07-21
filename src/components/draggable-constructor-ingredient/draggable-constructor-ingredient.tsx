import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-ingredient.module.css';
import { moveIngredientInConstructor, removeIngredientFromConstructor } from '../../services/actions/burger';
import { useDrag, useDrop } from 'react-dnd';
import { IOrderableIngredient, TReorderingObject } from '../../utils/types';
import { FC } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';

interface IDraggableConstructorIngredientProps {
    ingredient: IOrderableIngredient
}

const DraggableConstructorIngredient: FC<IDraggableConstructorIngredientProps> = ({ ingredient }) => {

    const dispatch = useAppDispatch();
    const fillingIngredients: ReadonlyArray<IOrderableIngredient> = useAppSelector(store => store.burger.constructorFillingIngredients);

    const onRemoveIngredient = (generatedId: string) => {
        dispatch(removeIngredientFromConstructor(generatedId));
    }

    const [{ display }, dragRef] = useDrag({
        type: 'reorderableIngredient',
        item: { generatedId: ingredient.generatedId },
        collect: monitor => ({
            display: monitor.isDragging() ? 'none' : 'flex'
        })
    });

    const onDropIngredient = (generatedId: string) => {
        const droppedIngredient: IOrderableIngredient | undefined = fillingIngredients.filter(searchedIngredient => searchedIngredient.generatedId === generatedId).shift();
        if (!droppedIngredient) {
            return;
        }

        dispatch(moveIngredientInConstructor(ingredient.generatedId, droppedIngredient));
    }

    const [ { isOver }, dropTarget] = useDrop({
        accept: 'reorderableIngredient',
        drop(item: TReorderingObject) {
            onDropIngredient(item.generatedId);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    function attachRef(el: HTMLDivElement) {
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

export default DraggableConstructorIngredient;