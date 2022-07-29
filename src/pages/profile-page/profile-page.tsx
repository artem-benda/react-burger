import { FC, ReactNode, SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { logoutThunk } from "../../services/actions/auth";
import styles from "./profile-page.module.css";

interface IProfileProps {
    children: ReactNode
}

const ProfilePage : FC<IProfileProps> = ({children}) => {
    const dispatch = useAppDispatch();

    const onLogoutClick = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(logoutThunk());
    }
    return(
        <main className="app-page contents mt-10">
            <section className={styles.profileContainer}>
                <article className={styles.profileSideColumn}>
                    <NavLink to='/profile' exact={true} activeClassName={styles.activeMenuItem}><p className="text text_type_main-medium pt-6 pb-2">Профиль</p></NavLink>
                    <NavLink to='/profile/orders' exact={true} activeClassName={styles.activeMenuItem}><p className="text text_type_main-medium pt-2 pb-2">История заказов</p></NavLink>
                    <a href="/logout" className="text text_type_main-medium pt-2 pb-2 text_color_inactive" onClick={onLogoutClick}>Выйти</a>
                    <p className="text text_type_main-small pt-20 pb-2 text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
                </article>
                {children}
            </section>
        </main>
    )
}

export default ProfilePage;