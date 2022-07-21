import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, SyntheticEvent } from 'react';
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { useForm } from "../../hooks/use-form";
import { editUserThunk, logoutThunk } from "../../services/actions/auth";
import styles from "./profile-page.module.css";

// Fix ошибки ts для компонентов yandex
declare module 'react' {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    }
}

interface IEditUserRequestState {
    editUserRequest: boolean;
    editUserFailed: boolean;
}

interface IProfileForm {
    name: string;
    email: string;
    password: string;
}

function ProfilePage() {
    const dispatch = useAppDispatch();

    const user = useAppSelector(store => store.auth.user);
    const { editUserRequest, editUserFailed }: IEditUserRequestState = useAppSelector(store => store.auth);

    const { form, onChange, setValues } = useForm<IProfileForm>({ name: '', email: '', password: '', ...user });

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
            e.preventDefault();
            dispatch(editUserThunk(form));
        },
        [dispatch, form]
    );

    const onCancelClick = () => {
        setValues({ name: '', email: '', password: '', ...user })
    }

    const onLogoutClick = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(logoutThunk());
    }

    const isDataModified = user !== null && (form.name !== user.name || form.email !== user.email);

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
                                <Button type="primary" size="medium" onClick={onCancelClick}>
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