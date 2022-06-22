import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

function LoginPage(props) {
    const user = useSelector(store => store.auth.user);

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
                <header className="text text_type_main-medium pt-10">Вход</header>
                <div className="mt-6"><Input placeholder="E-mail" /></div>
                <div className="mt-6"><Input placeholder="Пароль" icon={"ShowIcon"} /></div>
                <div className="mt-6"><Button>Войти</Button></div>
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