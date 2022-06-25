import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { sendPasswordResetCode } from "../../services/actions/auth";
import { useForm } from "../../hooks/use-form";

function ForgotPasswordPage(props) {
    const { form, onChange } = useForm({ email: '' });
    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const { sendResetPasswordCodeRequest, sendResetPasswordCodeSuccess, sendResetPasswordCodeFailed } = useSelector(store => store.auth);

    const onSendResetCodeClick = useCallback(
        e => {
          e.preventDefault();
          dispatch(sendPasswordResetCode(form.email));
        },
        [dispatch, form]
      );

    useEffect(() => {
        if (sendResetPasswordCodeSuccess) {
            history.replace({ pathname: '/reset-password', state: { from: location.pathname }});
        }
    }, [sendResetPasswordCodeSuccess, history, location]);
    
    return(
        <main className="app-page contents">
            <section className="block-center slim-container">
                <p className="text text_type_main-medium pt-10">Восстановление пароля</p>
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
    )
}

export default ForgotPasswordPage;