import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { fetchIngredients } from "../../services/actions/burger";
import styles from "./burger-ingredient-page.module.css";

function BurgerIngredientPage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const availableIngredients = useSelector(store => store.burger.availableIngredients);
  const ingredient = useMemo(() => availableIngredients.filter(ingredient => ingredient._id === id).shift(), [id, availableIngredients]);
  useEffect(() => {
      if (!ingredient) {
          dispatch(fetchIngredients());
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