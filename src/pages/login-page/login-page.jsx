import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { login } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";

function LoginPage() {
    const { form, onChange } = useForm({ email: '', password: ''});

    const dispatch = useDispatch();
    const { loginRequest, loginFailed } = useSelector(store => store.auth);

    const onLoginClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(login(form.email, form.password));
        },
        [dispatch, form]
      );

    return(
      <div className="app">
        <AppHeader />
        <main className="app-page contents">
            <section className="block-center slim-container">
                <header className="text text_type_main-medium pt-10">Вход</header>
                <div className="mt-6"><Input placeholder="E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                <div className="mt-6"><Input placeholder="Пароль" value={form.password} name={'password'} icon={"ShowIcon"} onChange={onChange} type={'password'} /></div>
                <div className="mt-6"><Button onClick={onLoginClick}>Войти</Button></div>
                { loginFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось выполнить вход. Проверьте правильность ввода Email и пароля.
                    </p>
                }
                { loginRequest &&
                    <p className="text text_type_main-default pt-6 text-centered">
                        Выполняется вход...
                    </p>
                }
                <p className="text text_type_main-default text_color_inactive pt-20">
                    Вы - новый пользователь? <Link to="/register" replace={true}>Зарегистрироваться</Link>
                </p>
                <p className="text text_type_main-default text_color_inactive pt-4">
                    Забыли пароль? <Link to="/forgot-password" replace={true}>Восстановить пароль</Link>
                </p>
            </section>
        </main>
      </div>
    )
}

export default LoginPage;