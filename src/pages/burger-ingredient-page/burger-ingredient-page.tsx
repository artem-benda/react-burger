import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { fetchIngredients } from "../../services/actions/burger";
import { IIngredient } from "../../utils/types";
import styles from "./burger-ingredient-page.module.css";

interface IBurgerIngredientPageParams {
  id: string;
}

function BurgerIngredientPage() {
  const { id } = useParams<IBurgerIngredientPageParams>();
  const dispatch = useDispatch();
  // TODO типизировать REDUX в 5 спринте. Временно используем any.
  const availableIngredients: Array<IIngredient> = useSelector(store => (store as any).burger.availableIngredients);
  const ingredient = useMemo(() => availableIngredients.filter(ingredient => ingredient._id === id).shift(), [id, availableIngredients]);
  useEffect(() => {
      if (!ingredient) {
          // TODO типизировать REDUX THUNK в 5 спринте. Временно используем any.
          dispatch(fetchIngredients() as any);
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