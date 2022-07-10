import { Redirect, Route, RouteProps } from 'react-router-dom';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../utils/data';
import { getUserFailed, getUserSuccess } from '../../services/actions/auth';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }: RouteProps) => {
  // TODO типизировать REDUX в 5 спринте. Временно используем any.
  const user = useSelector(store => (store as any).auth.user);
  const dispatch = useDispatch();
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