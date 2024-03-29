import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useCallback, SyntheticEvent } from "react";
import { registerThunk } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";
import styles from './register-page.module.css';
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";

interface IRegisterRequestState {
    registerRequest: boolean;
    registerFailed: boolean;
}

interface IRegisterForm {
    email: string;
    password: string;
    name: string;
}

function RegisterPage() {
    const { form, onChange } = useForm<IRegisterForm>({ email: '', password: '', name: '' });
    const dispatch = useAppDispatch();
    const { registerRequest, registerFailed }: IRegisterRequestState = useAppSelector(store => store.auth);

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          dispatch(registerThunk(form.email, form.password, form.name));
        },
        [dispatch, form]
      );
    
    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Регистрация</p>
                <form onSubmit={onSubmit} className={styles.form}>
                    <div className="mt-6"><Input placeholder="Имя" value={form.name} name={'name'} onChange={onChange} /></div>
                    <div className="mt-6"><Input placeholder="E-mail" value={form.email} name={'email'} onChange={onChange} /></div>
                    <div className="mt-6"><Input placeholder="Пароль" icon={"ShowIcon"} value={form.password} name={'password'} onChange={onChange} /></div>
                    <div className="mt-6"><Button htmlType="submit">Зарегистрироваться</Button></div>
                </form>
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