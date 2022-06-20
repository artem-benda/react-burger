import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';

export default function AppHeader() {
    return (
        <header className={styles.appHeader}>
            <nav className={styles.appHeaderMenu}>
                <NavLink exact={true} to="/" className="pr-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <BurgerIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Конструктор</span>
                </NavLink>
                <NavLink exact={true} to="/feed" className="pl-5 pr-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <ListIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Лента заказов</span>
                </NavLink>
            </nav>
            <Logo />
            <nav className={styles.appHeaderPersonal}>
                <NavLink exact={true} to="/profile" className="pl-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <ProfileIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Личный кабинет</span>
                </NavLink>
            </nav>
        </header>
    );
}
