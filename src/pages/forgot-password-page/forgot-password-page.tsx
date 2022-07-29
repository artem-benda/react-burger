import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useCallback, useEffect, SyntheticEvent } from "react";
import { sendPasswordResetCodeThunk } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './forgot-password-page.module.css';
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";

interface ISendResetCodeRequestState {
    sendResetPasswordCodeRequest: boolean;
    sendResetPasswordCodeSuccess: boolean;
    sendResetPasswordCodeFailed: boolean;
}

interface IForgotPasswordForm {
    email: string;
}

function ForgotPasswordPage() {
    const { form, onChange } = useForm<IForgotPasswordForm>({ email: '' });
    const history = useHistory();
    const location = useLocation();

    const dispatch = useAppDispatch();
    const { sendResetPasswordCodeRequest, sendResetPasswordCodeSuccess, sendResetPasswordCodeFailed }: ISendResetCodeRequestState = useAppSelector(store => store.auth);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(sendPasswordResetCodeThunk(form.email));
        },
        [dispatch, form]
      );

    useEffect(() => {
        if (sendResetPasswordCodeSuccess) {
            history.replace({ pathname: '/reset-password', state: { from: location.pathname }});
        }
    }, [sendResetPasswordCodeSuccess, history, location]);
    
    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Восстановление пароля</p>
                <form onSubmit={onSubmit} className={styles.form}>
                    <div className="mt-6"><Input placeholder="Укажите E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                    <div className="mt-6"><Button htmlType="submit">Восстановить</Button></div>
                </form>
                { sendResetPasswordCodeFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось отправить код. Проверьте правильность ввода Email.
                    </p>
                }
                { sendResetPasswordCodeRequest &&
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

export default ForgotPasswordPage;