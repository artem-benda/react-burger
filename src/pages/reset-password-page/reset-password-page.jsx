import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { resetPassword } from "../../services/actions/auth";

function ResetPasswordPage(props) {
    const user = useSelector(store => store.auth.user);
    const [form, setValue] = useState({ password: '', token: '' });
    const dispatch = useDispatch();
    const { resetPasswordCodeRequest, resetPasswordCodeFailed } = useSelector(store => store.auth);

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onResetCodeClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(resetPassword(form.password, form.token));
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
                <div className="mt-6"><Input placeholder="Введите новый пароль" value={form.password} name={'password'} onChange={onChange} /></div>
                <div className="mt-6"><Input placeholder="Введите код из письма" value={form.token} name={'token'} onChange={onChange} /></div>
                <div className="mt-6"><Button onClick={onResetCodeClick}>Сохранить</Button></div>
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
      </div>
    )
}

export default ResetPasswordPage;