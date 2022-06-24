import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { sendPasswordResetCode } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";

function ForgotPasswordPage(props) {
    const { form, onChange } = useForm({ email: '' });

    const dispatch = useDispatch();
    const { sendResetPasswordCodeRequest, sendResetPasswordCodeFailed } = useSelector(store => store.auth);

    const onSendResetCodeClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(sendPasswordResetCode(form.email));
        },
        [dispatch, form]
      );
    
    return(
      <div className="app">
        <AppHeader />
        <main className="app-page contents">
            <section className="block-center slim-container">
                <header className="text text_type_main-medium pt-10">Восстановление пароля</header>
                <div className="mt-6"><Input placeholder="Укажите E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                <div className="mt-6"><Button onClick={onSendResetCodeClick}>Восстановить</Button></div>
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
      </div>
    )
}

export default ForgotPasswordPage;