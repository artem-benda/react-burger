import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NonAuthRoute } from '../components/non-auth-route/non-auth-route';
import { ProtectedRoute } from '../components/protected-route/protected-route';
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
      <Switch>
        <Route path="/" exact={true}>
          <BurgerConstructorPage />
        </Route>
        <NonAuthRoute path="/login" exact={true}>
          <LoginPage />
        </NonAuthRoute>
        <NonAuthRoute path="/register" exact={true}>
          <RegisterPage />
        </NonAuthRoute>
        <NonAuthRoute path="/forgot-password" exact={true}>
          <ForgotPasswordPage />
        </NonAuthRoute>
        <NonAuthRoute path="/reset-password" exact={true}>
          <ResetPasswordPage />
        </NonAuthRoute>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <BurgerIngredientPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
