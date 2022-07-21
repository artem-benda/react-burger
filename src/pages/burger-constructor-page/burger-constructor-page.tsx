import { useEffect } from 'react';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './burger-constructor-page.module.css';
import { fetchIngredientsThunk } from '../../services/actions/burger';
import { IIngredient } from '../../utils/types';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

function BurgerConstructorPage() {
  const getIngredientsRequest: boolean = useAppSelector(store => store.burger.getIngredientsRequest);
  const getIngredientsFailed: boolean = useAppSelector(store => store.burger.getIngredientsFailed);
  const ingredients: ReadonlyArray<IIngredient> = useAppSelector(store => store.burger.availableIngredients);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsThunk());
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
