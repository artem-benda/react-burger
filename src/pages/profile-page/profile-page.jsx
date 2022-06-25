import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import { editUser, logout } from "../../services/actions/auth";
import styles from "./profile-page.module.css";

function ProfilePage() {
    const user = useSelector(store => store.auth.user);
    const { form, onChange, setValues } = useForm({ name: '', email: '', password: '', ...user });

    const dispatch = useDispatch();
    const { editUserRequest, editUserFailed } = useSelector(store => store.auth);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            dispatch(editUser(form));
        },
        [dispatch, form]
    );

    const onCancelClick = () => {
        setValues({ name: '', email: '', password: '', ...user })
    }

    const onLogoutClick = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    const isDataModified = form.name !== user.name || form.email !== user.email;

    return(
        <main className="app-page contents mt-10">
            <section className={styles.profileContainer}>
                <article className={styles.profileSideColumn}>
                    <NavLink to='/profile' activeClassName={styles.activeMenuItem}><p className="text text_type_main-medium pt-2 pb-2">Профиль</p></NavLink>
                    <NavLink to='/profile/orders' activeClassName={styles.activeMenuItem}><p className="text text_type_main-medium pt-2 pb-2 text_color_inactive">История заказов</p></NavLink>
                    <a href="/logout" className="text text_type_main-medium pt-2 pb-2 text_color_inactive" onClick={onLogoutClick}>Выйти</a>
                    <p className="text text_type_main-small pt-20 pb-2 text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
                </article>
                <article className={styles.profileContentsColumn}>
                    <form onSubmit={onSubmit} className={styles.profileForm}>
                        <div className="mt-6"><Input placeholder="Имя" icon={"EditIcon"} value={form.name} name={'name'} onChange={onChange} /></div>
                        <div className="mt-6"><Input placeholder="E-mail" icon={"EditIcon"} value={form.email} name={'email'} onChange={onChange} type='email' /></div>
                        <div className="mt-6"><Input placeholder="Пароль" icon={"EditIcon"} value={form.password} name={'password'} onChange={onChange} type='password' /></div>
                        { isDataModified &&
                            <div className={styles.buttonsContainer + " mt-6"}>
                                <Button type="primary" size="medium" onClick={onCancelClick} className="mr-4">
                                    Отмена
                                </Button>
                                <Button type="primary" size="medium" htmlType="submit">
                                    Сохранить
                                </Button>
                            </div>
                        }
                    </form>
                    { editUserFailed &&
                        <p className="text text_type_main-default pt-6 text-centered text-danger">
                            Не удалось изменить данные пользователя. Проверьте корректность введенных значений.
                        </p>
                    }
                    { editUserRequest &&
                        <p className="text text_type_main-default pt-6 text-centered">
                            Отправка запроса...
                        </p>
                    }
                </article>
                <article className={styles.profileSideColumn}></article>
            </section>
        </main>
    )
}

export default ProfilePage;