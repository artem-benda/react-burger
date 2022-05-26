import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { getIngredients, mapErrorToMessage } from '../../utils/data'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getIngredients()
      .then(data => {
        setIsLoading(false)
        setError(null)
        setIngredients(data)
      })
      .catch(e => {
        setIsLoading(false)
        setError(mapErrorToMessage(e))
      })
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.appPage}>
        <section className={styles.appPageTitle}><p className="text text_type_main-large pt-10">Соберите бургер</p></section>
        { error &&
          <section className={styles.errorSection + ' mt-10 pl-4 pr-4'}><p>{error}</p></section>
        }
        { isLoading &&
          <section className={styles.infoSection}><p>Загружаем ингредиенты...</p></section>
        }
        <section className={styles.appPageContents}>
        { ingredients.length > 0 &&
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor
                selectedIngredients={ingredients.filter(ingredient => ingredient.type === 'main' || ingredient.type === 'sauce')} 
                bunIngredient={ingredients.filter(ingredient => ingredient.type === 'bun').shift()}
            />
          </>
        }
        </section>
      </main>
    </div>
  );
}

export default App;
