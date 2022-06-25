import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import styles from './app-header.module.css';

export default function AppHeader() {
    const iconConstructorType = !!useRouteMatch({ path: '/', exact: true}) ? 'primary' : 'secondary';
    const iconFeedType = !!useRouteMatch('/feed') ? 'primary' : 'secondary';
    const iconProfileType = !!useRouteMatch('/profile') ? 'primary' : 'secondary';

    return (
        <header className={styles.appHeader}>
            <nav className={styles.appHeaderMenu}>
                <NavLink exact={true} to="/" className="pr-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <BurgerIcon type={iconConstructorType} />
                    <span className="text text_type_main-small pl-2">Конструктор</span>
                </NavLink>
                <NavLink exact={true} to="/feed" className="pl-5 pr-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <ListIcon type={iconFeedType} />
                    <span className="text text_type_main-small pl-2">Лента заказов</span>
                </NavLink>
            </nav>
            <Link to="/"><Logo /></Link>
            <nav className={styles.appHeaderPersonal}>
                <NavLink exact={true} to="/profile" className="pl-5 pt-4 pb-4 text_color_inactive" activeClassName={styles.activeMenuItem}>
                    <ProfileIcon type={iconProfileType} />
                    <span className="text text_type_main-small pl-2">Личный кабинет</span>
                </NavLink>
            </nav>
        </header>
    );
}
