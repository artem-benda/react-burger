import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useCallback, SyntheticEvent } from "react";
import { loginThunk } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './login-page.module.css';
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";

interface ILoginRequestState {
    loginRequest: boolean;
    loginFailed: boolean;
}

interface ILoginForm {
    email: string;
    password: string;
}

function LoginPage() {
    const { form, onChange } = useForm<ILoginForm>({ email: '', password: ''});

    const dispatch = useAppDispatch();
    const { loginRequest, loginFailed }: ILoginRequestState = useAppSelector(store => store.auth);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(loginThunk(form.email, form.password));
        },
        [dispatch, form]
      );

    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Вход</p>
                <form onSubmit={onSubmit} className={`${styles.loginForm} login-form`}>
                    <div className="mt-6"><Input placeholder="E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                    <div className="mt-6"><Input placeholder="Пароль" value={form.password} name={'password'} icon={"ShowIcon"} onChange={onChange} type={'password'} /></div>
                    <div className="mt-6"><Button htmlType="submit">Войти</Button></div>
                </form>
                { loginFailed &&
                    <p className="text text_type_main-default pt-6 text-centered text-danger">
                        Не удалось выполнить вход. Проверьте правильность ввода Email и пароля.
                    </p>
                }
                { loginRequest &&
                    <p className="text text_type_main-default pt-6 text-centered loader">
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
    )
}

export default LoginPage;