import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { resetPassword } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";

function ResetPasswordPage(props) {
    const { form, onChange } = useForm({ password: '', token: '' });
    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const { resetPasswordCodeRequest, resetPasswordSuccess, resetPasswordCodeFailed, sendResetPasswordCodeSuccess } = useSelector(store => store.auth);

    useEffect(() => {
    if (location.state?.from !== '/forgot-password' || !sendResetPasswordCodeSuccess ) {
        history.replace({ pathname: '/forgot-password'});
    }}, [sendResetPasswordCodeSuccess, history, location]);

    const onResetCodeClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(resetPassword(form.password, form.token));
        },
        [dispatch, form]
      );
    
    useEffect(() => {
        if (resetPasswordSuccess) {
            history.replace({ pathname: '/login'});
        }
    }, [resetPasswordSuccess, history]);

    return(
      <div className="app">
        <AppHeader />
        <main className="app-page contents">
            <section className="block-center slim-container">
                <header className="text text_type_main-medium pt-10">Восстановление пароля</header>
                <div className="mt-6"><Input placeholder="Введите новый пароль" value={form.password} name={'password'} onChange={onChange} type='password' /></div>
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