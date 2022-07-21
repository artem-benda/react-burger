import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { fetchIngredientsThunk } from "../../services/actions/burger";
import { IIngredient } from "../../utils/types";
import styles from "./burger-ingredient-page.module.css";

interface IBurgerIngredientPageParams {
  id: string;
}

function BurgerIngredientPage() {
  const { id } = useParams<IBurgerIngredientPageParams>();
  const dispatch = useAppDispatch();
  const availableIngredients: ReadonlyArray<IIngredient> = useAppSelector(store => store.burger.availableIngredients);
  const ingredient = useMemo(() => availableIngredients.filter(ingredient => ingredient._id === id).shift(), [id, availableIngredients]);
  useEffect(() => {
      if (!ingredient) {
          dispatch(fetchIngredientsThunk());
      }
  }, [dispatch, ingredient]);

  return (
    <main className="app-page contents mt-10">
      <article className={styles.detailsContainer}>
          <IngredientDetails />
      </article>
    </main>
  );
}

export default BurgerIngredientPage;