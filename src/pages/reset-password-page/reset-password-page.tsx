import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useCallback, useEffect, SyntheticEvent } from "react";
import { resetPasswordThunk } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './reset-password-page.module.css';
import { ILocationState } from "../../utils/types";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";

interface IResetPasswordForm {
    password: string;
    token: string;
}

function ResetPasswordPage() {
    const { form, onChange } = useForm<IResetPasswordForm>({ password: '', token: '' });
    const history = useHistory();
    const location = useLocation<ILocationState>();
    const dispatch = useAppDispatch();

    const { resetPasswordRequest, resetPasswordSuccess, resetPasswordFailed, sendResetPasswordCodeSuccess } = useAppSelector(store => store.auth);

    useEffect(() => {
        if (location.state?.from !== '/forgot-password' || !sendResetPasswordCodeSuccess ) {
            history.replace({ pathname: '/forgot-password'});
    }}, [sendResetPasswordCodeSuccess, history, location]);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(resetPasswordThunk(form.password, form.token));
        },
        [dispatch, form]
      );
    
    useEffect(() => {
        if (resetPasswordSuccess) {
            history.replace({ pathname: '/login'});
        }
    }, [resetPasswordSuccess, history]);

    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Восстановление пароля</p>
                <form onSubmit={onSubmit} className={styles.form}>
                    <div className="mt-6"><Input placeholder="Введите новый пароль" value={form.password} name={'password'} onChange={onChange} type='password' /></div>
                    <div className="mt-6"><Input placeholder="Введите код из письма" value={form.token} name={'token'} onChange={onChange} /></div>
                    <div className="mt-6"><Button htmlType="submit">Сохранить</Button></div>
                </form>
                { resetPasswordFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось восстановить пароль. Проверьте правильность ввода кода.
                    </p>
                }
                { resetPasswordRequest &&
                    <p className="text text_type_main-default pt-6 text-centered">
                        Отправка запроса...
                    </p>
                }
                <p className="text text_type_main-default text_color_inactive pt-10">
                    Вспомнили пароль? <Link to="/login" replace={true}>Войти</Link>
                </p>
            </section>
        </main>
    )
}

export default ResetPasswordPage;