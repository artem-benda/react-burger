import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { register } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";

function RegisterPage(props) {
    const { form, onChange } = useForm({ email: '', password: '', name: '' });

    const dispatch = useDispatch();
    const { registerRequest, registerFailed } = useSelector(store => store.auth);

    const onRegisterClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(register(form.email, form.password, form.name));
        },
        [dispatch, form]
      );
    
    return(
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
    )
}

export default RegisterPage;