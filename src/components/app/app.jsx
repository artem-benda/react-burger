import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import ingredients from '../../utils/data'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.appPage}>
        <section className={styles.appPageTitle}><p className="text text_type_main-large pt-10">Соберите бургер</p></section>
        <section className={styles.appPageContents}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor
              selectedIngredients={ingredients.filter(ingredient => ingredient.type === 'main' || ingredient.type === 'sauce')} 
              bunIngredient={ingredients.filter(ingredient => ingredient.type === 'bun').shift()}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
