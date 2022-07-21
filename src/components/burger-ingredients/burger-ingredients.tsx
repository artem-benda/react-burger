import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';
import { switchTab } from "../../services/actions/burger";
import { IIngredient, TIngredientType } from '../../utils/types';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

function BurgerIngredients() {
    const ingredients: ReadonlyArray<IIngredient> = useAppSelector(store => store.burger.availableIngredients);
    const currentTab = useAppSelector(store => store.burger.currentTab);

    const filterIngredientsByType = (ingredients: ReadonlyArray<IIngredient>, type: TIngredientType): Array<IIngredient> => ingredients.filter(ingredient => ingredient.type === type);
    const bunIngredients = filterIngredientsByType(ingredients, 'bun');
    const sauceIngredients = filterIngredientsByType(ingredients, 'sauce');
    const mainIngredients = filterIngredientsByType(ingredients, 'main');

    const dispatch = useAppDispatch();

    const bunTitleRef = useRef<HTMLParagraphElement>(null);
    const sauceTitleRef = useRef<HTMLParagraphElement>(null);
    const mainTitleRef = useRef<HTMLParagraphElement>(null);
    
    const setCurrentTab = (tab: string) => {
        if (!['bun', 'sauce', 'main'].includes(tab))
            return;

        switch(tab) {
            case 'bun': {
                if (bunTitleRef.current !== null) {
                    bunTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            }
            case 'sauce': {
                if (sauceTitleRef.current !== null) {
                    sauceTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            }
            case 'main': {
                if (mainTitleRef.current !== null) {
                    mainTitleRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            }
            default: {}
        }

        if (currentTab !== tab) {
            dispatch(switchTab(tab as TIngredientType));
        }
    }

    const onScroll = () => {
        if (bunTitleRef.current === null || sauceTitleRef.current === null || mainTitleRef.current === null) {
            return;
        }
        const bunTitleDistance = Math.abs(bunTitleRef.current.getBoundingClientRect().top);
        const sauceTitleDistance = Math.abs(sauceTitleRef.current.getBoundingClientRect().top);
        const mainTitleDistance = Math.abs(mainTitleRef.current.getBoundingClientRect().top);

        const calculatedTab = (bunTitleDistance <= sauceTitleDistance && bunTitleDistance <= mainTitleDistance) ? 'bun' :
            ((sauceTitleDistance <= bunTitleDistance && sauceTitleDistance <= mainTitleDistance) ? 'sauce' : 'main');
        
        if (currentTab !== calculatedTab) {
            dispatch(switchTab(calculatedTab));
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.tabsContainer}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            <article className={styles.ingredientsContainer + ' custom-scroll'} onScroll={onScroll}>
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={bunTitleRef}>Булки</p>
                { bunIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={sauceTitleRef}>Соусы</p>
                { sauceIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
                <p className={styles.typeTitle + ' text text_type_main-medium pt-10'} ref={mainTitleRef}>Начинки</p>
                { mainIngredients.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient} />)}
            </article>
        </section>
    );
}

export default BurgerIngredients;
