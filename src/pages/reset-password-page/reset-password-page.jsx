import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import { Link } from 'react-router-dom';

function ResetPasswordPage(props) {
    return(
      <div className="app">
        <AppHeader />
        <main className="app-page contents">
            <section className="block-center slim-container">
                <header className="text text_type_main-medium pt-10">Восстановление пароля</header>
                <div className="mt-6"><Input placeholder="Введите новый пароль" /></div>
                <div className="mt-6"><Input placeholder="Введите код из письма" /></div>
                <div className="mt-6"><Button>Сохранить</Button></div>
                <p className="text text_type_main-default text_color_inactive pt-10">
                    Вспомнили пароль? <Link to="/login" replace={true}>Войти</Link>
                </p>
            </section>
        </main>
      </div>
    )
}

export default ResetPasswordPage;