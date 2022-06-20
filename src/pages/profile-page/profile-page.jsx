import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import styles from "./profile-page.module.css";

function ProfilePage(props) {
    return(
      <div className="app">
        <AppHeader />
        <main className="app-page contents mt-10">
            <section className={styles.profileContainer}>
                <article className={styles.profileSideColumn}>
                    <p className="text text_type_main-medium pt-2 pb-2">Профиль</p>
                    <p className="text text_type_main-medium pt-2 pb-2 text_color_inactive">История заказов</p>
                    <p className="text text_type_main-medium pt-2 pb-2 text_color_inactive">Выйти</p>
                    <p className="text text_type_main-small pt-20 pb-2 text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
                </article>
                <article className={styles.profileContentsColumn}>
                    <div className="mt-6"><Input placeholder="Имя" icon={"EditIcon"} /></div>
                    <div className="mt-6"><Input placeholder="E-mail" icon={"EditIcon"} /></div>
                    <div className="mt-6"><Input placeholder="Пароль" icon={"EditIcon"} /></div>
                </article>
                <article className={styles.profileSideColumn}></article>
            </section>
        </main>
      </div>
    )
}

export default ProfilePage;