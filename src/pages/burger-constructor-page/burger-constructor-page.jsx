import { useEffect } from 'react';
import AppHeader from '../../components/app-header/app-header';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './burger-constructor-page.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../services/actions/burger';

function BurgerConstructorPage() {
  const getIngredientsRequest = useSelector(store => store.burger.getIngredientsRequest);
  const getIngredientsFailed = useSelector(store => store.burger.getIngredientsFailed);
  const ingredients = useSelector(store => store.burger.availableIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch])

  return (
    <div className="app">
      <AppHeader />
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
    </div>
  );
}

export default BurgerConstructorPage;