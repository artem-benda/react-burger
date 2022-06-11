import React, { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../services/actions/burger';

function App() {
  const getIngredientsRequest = useSelector(store => store.burger.getIngredientsRequest);
  const getIngredientsFailed = useSelector(store => store.burger.getIngredientsFailed);
  const ingredients = useSelector(store => store.burger.availableIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.appPage}>
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
    </div>
  );
}

export default App;
