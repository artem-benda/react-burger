import PersonalOrderDetails from "../../components/personal-order-details/personal-order-details";
import styles from "./personal-order-page.module.css.module.css";

function PersonalOrderPage() {
  return (
    <main className="app-page contents mt-10">
      <article className={styles.detailsContainer}>
          <PersonalOrderDetails />
      </article>
    </main>
  );
}

export default PersonalOrderPage;
