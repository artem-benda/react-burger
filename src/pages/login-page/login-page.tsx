import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, SyntheticEvent } from "react";
import { loginThunk } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './login-page.module.css';

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

    const dispatch = useDispatch();
    // TODO типизировать REDUX в 5 спринте. Временно используем any.
    const { loginRequest, loginFailed }: ILoginRequestState = useSelector(store => (store as any).auth);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          // TODO типизировать REDUX THUNK в 5 спринте. Временно используем any.
          dispatch(loginThunk(form.email, form.password) as any);
        },
        [dispatch, form]
      );

    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Вход</p>
                <form onSubmit={onSubmit} className={styles.loginForm}>
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
    )
}

export default LoginPage;