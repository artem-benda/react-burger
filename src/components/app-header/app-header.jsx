import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './app-header.module.css';

export default function AppHeader() {
    return (
        <header className={styles.appHeader}>
            <nav className={styles.appHeaderMenu}>
                <a href="/" className="pr-5 pt-4 pb-4">
                    <BurgerIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Конструктор</span>
                </a>
                <a href="/feed" className="pl-5 pr-5 pt-4 pb-4">
                    <ListIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Лента заказов</span>
                </a>
            </nav>
            <Logo />
            <nav className={styles.appHeaderPersonal}>
                <a href="/profile" className="pl-5 pt-4 pb-4">
                    <ProfileIcon type="secondary" />
                    <span className="text text_type_main-small pl-2">Личный кабинет</span>
                </a>
            </nav>
        </header>
    );
}
