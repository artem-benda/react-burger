import styles from "./burger-order-page.module.css";
import BurgerOrderDetails from '../../components/burger-order-details/burger-order-details';

function BurgerOrderPage() {
  return (
    <main className="app-page contents mt-10">
      <article className={styles.detailsContainer}>
          <BurgerOrderDetails />
      </article>
    </main>
  );
}

export default BurgerOrderPage;
