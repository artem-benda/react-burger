import { useEffect } from 'react';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './burger-constructor-page.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredientsThunk } from '../../services/actions/burger';
import { IIngredient } from '../../utils/types';

function BurgerConstructorPage() {
  // TODO типизировать REDUX в 5 спринте. Временно используем any.
  const getIngredientsRequest: boolean = useSelector(store => (store as any).burger.getIngredientsRequest);
  const getIngredientsFailed: boolean = useSelector(store => (store as any).burger.getIngredientsFailed);
  const ingredients: Array<IIngredient> = useSelector(store => (store as any).burger.availableIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO типизировать REDUX THUNK в 5 спринте. Временно используем any.
    dispatch(fetchIngredientsThunk() as any);
  }, [dispatch])

  return (
    <main className="app-page">
      <section className={styles.appPageTitle}><p className="text text_type_main-large pt-10">Соберите бургер</p></section>
      { getIngredientsFailed &&
        <section className={styles.errorSection + ' mt-10 pl-4 pr-4'}><p>Не удалось загрузить список ингредиентов, повторите попытку позже.</p></section>
      }
      { getIngredientsRequest &&
        <section className={styles.infoSection}><p>Загружаем ингредиенты...</p></section>
      }
      <section className={styles.appPageContents}>
      { ingredients.length > 0 &&
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
      }
      </section>
    </main>
  );
}

export default BurgerConstructorPage;
