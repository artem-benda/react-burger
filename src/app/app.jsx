import { BrowserRouter as Router, Route } from 'react-router-dom';
import BurgerConstructorPage from '../pages/burger-constructor-page/burger-constructor-page';
import BurgerIngredientPage from '../pages/burger-ingredient-page/burger-ingredient-page';
import ForgotPasswordPage from '../pages/forgot-password-page/forgot-password-page';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import ProfilePage from '../pages/profile-page/profile-page';
import RegisterPage from '../pages/register-page/register-page';
import ResetPasswordPage from '../pages/reset-password-page/reset-password-page';

function App() {
  return (
    <Router>
      <Route path="/" exact={true}>
        <BurgerConstructorPage />
      </Route>
      <Route path="/login" exact={true}>
        <LoginPage />
      </Route>
      <Route path="/register" exact={true}>
        <RegisterPage />
      </Route>
      <Route path="/forgot-password" exact={true}>
        <ForgotPasswordPage />
      </Route>
      <Route path="/reset-password" exact={true}>
        <ResetPasswordPage />
      </Route>
      <Route path="/profile" exact={true}>
        <ProfilePage />
      </Route>
      <Route path="/ingredients/:id" exact={true}>
        <BurgerIngredientPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Router>
  );
}

export default App;
