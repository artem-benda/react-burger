import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { register } from "../../services/actions/auth";

function RegisterPage(props) {
    const user = useSelector(store => store.auth.user);
    const [form, setValue] = useState({ email: '', password: '', name: '' });
    const dispatch = useDispatch();
    const { registerRequest, registerFailed } = useSelector(store => store.auth);

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onRegisterClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(register(form.email, form.password, form.name));
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
                <header className="text text_type_main-medium pt-10">Регистрация</header>
                <div className="mt-6"><Input placeholder="Имя" value={form.name} name={'name'} onChange={onChange} /></div>
                <div className="mt-6"><Input placeholder="E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                <div className="mt-6"><Input placeholder="Пароль" icon={"ShowIcon"} value={form.password} name={'password'} onChange={onChange} /></div>
                <div className="mt-6"><Button onClick={onRegisterClick}>Зарегистрироваться</Button></div>
                { registerFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось зарегистрироваться. Проверьте правильность ввода.
                    </p>
                }
                { registerRequest &&
                    <p className="text text_type_main-default pt-6 text-centered">
                        Отправка запроса...
                    </p>
                }
                <p className="text text_type_main-default text_color_inactive pt-10">
                    Уже зарегистрированы? <Link to="/login" replace={true}>Войти</Link>
                </p>
            </section>
        </main>
      </div>
    )
}

export default RegisterPage;