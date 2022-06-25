import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import AppHeader from '../components/app-header/app-header';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import Modal from '../components/modal/modal';
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
  const location = useLocation();
  const background = location.state && location.state.background;
  const history = useHistory();
  const goBack = e => {
    history.goBack();
  };
  return (
    <div className="app">
      <AppHeader />
      <Switch location={background || location}>
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

      { background && 
        <Route path="/ingredients/:id">
          <Modal title="Детали ингредиента" onDismiss={goBack}>
            <IngredientDetails />
          </Modal>
        </Route>
      }
    </div>
  );
}

export default App;
