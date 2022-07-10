import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, SyntheticEvent } from "react";
import { resetPassword } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './reset-password-page.module.css';
import { ILocationState } from "../../utils/types";

interface IResetPasswordForm {
    password: string;
    token: string;
}

interface IResetPasswordRequestState {
    resetPasswordCodeRequest: boolean;
    resetPasswordSuccess: boolean;
    resetPasswordCodeFailed: boolean;
    sendResetPasswordCodeSuccess: boolean;
}

function ResetPasswordPage() {
    const { form, onChange } = useForm<IResetPasswordForm>({ password: '', token: '' });
    const history = useHistory();
    const location = useLocation<ILocationState>();
    const dispatch = useDispatch();

    // TODO типизировать REDUX в 5 спринте. Временно используем any.
    const { resetPasswordCodeRequest, resetPasswordSuccess, resetPasswordCodeFailed, sendResetPasswordCodeSuccess }: IResetPasswordRequestState = useSelector(store => (store as any).auth);

    useEffect(() => {
    if (location.state?.from !== '/forgot-password' || !sendResetPasswordCodeSuccess ) {
        history.replace({ pathname: '/forgot-password'});
    }}, [sendResetPasswordCodeSuccess, history, location]);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          // TODO типизировать REDUX THUNK в 5 спринте. Временно используем any.
          dispatch(resetPassword(form.password, form.token) as any);
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
                { resetPasswordCodeFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось восстановить пароль. Проверьте правильность ввода кода.
                    </p>
                }
                { resetPasswordCodeRequest &&
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