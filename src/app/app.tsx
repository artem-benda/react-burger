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
import { Location } from "history";
import BurgerOrderDetails from '../components/burger-order-details/burger-order-details';
import BurgerOrderPage from '../pages/burger-order-page/burger-order-page';
import PersonalOrderPage from '../pages/personal-order-page/personal-order-page';
import BurgerOrdersPage from '../pages/burger-orders-page/burger-orders-page';
import PersonalOrdersPage from '../pages/personal-orders-page/personal-orders-page';
import PersonalOrderDetails from '../components/personal-order-details/personal-order-details';
import ProfileFormPage from '../pages/profile-form-page/profile-form-page';

interface BackgroundLocationState {
  background: Location
}

function App() {
  const location = useLocation<BackgroundLocationState>();
  const background = location.state && location.state.background;
  const history = useHistory();
  const goBack = (): void => {
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
        <ProtectedRoute path="/profile/orders" exact={true}>
          <ProfilePage>
            <PersonalOrdersPage />
          </ProfilePage>
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage>
            <ProfileFormPage />
          </ProfilePage>
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <BurgerIngredientPage />
        </Route>
        <Route path="/feed" exact={true}>
          <BurgerOrdersPage />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <BurgerOrderPage />
        </Route>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <PersonalOrderPage />
        </ProtectedRoute>
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

      { background && 
        <Route path="/feed/:id">
          <Modal onDismiss={goBack}>
            <BurgerOrderDetails />
          </Modal>
        </Route>
      }

      { background && 
        <Route path="/profile/orders/:id">
          <Modal onDismiss={goBack}>
            <PersonalOrderDetails />
          </Modal>
        </Route>
      }
    </div>
  );
}

export default App;
