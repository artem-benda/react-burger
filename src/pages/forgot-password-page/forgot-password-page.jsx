import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { sendPasswordResetCode } from "../../services/actions/auth";

function ForgotPasswordPage(props) {
    const user = useSelector(store => store.auth.user);
    const [form, setValue] = useState({ email: '' });
    const dispatch = useDispatch();
    const { sendResetPasswordCodeRequest, sendResetPasswordCodeFailed } = useSelector(store => store.auth);

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onSendResetCodeClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(sendPasswordResetCode(form.email));
        },
        [dispatch, form]
      );

    if (user) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }
    
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