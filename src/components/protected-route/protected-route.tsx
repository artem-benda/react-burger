import { Redirect, Route, RouteProps } from 'react-router-dom';
import { FC, ReactNode, useEffect, useState } from 'react';
import { getUser } from '../../utils/data';
import { getUserFailed, getUserSuccess } from '../../services/actions/auth';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }: RouteProps) => {
  const user = useAppSelector(store => store.auth.user);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const init = async () => {
    await getUser()
      .then((data) => {
        setLoading(false);
        dispatch(getUserSuccess(data));
      })
      .catch(() => {
        setLoading(false);
        dispatch(getUserFailed());
      })
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }): ReactNode =>
        user ? (
          children as ReactNode
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location.pathname }
            }}
          />
        )
      }
    />
  );
}