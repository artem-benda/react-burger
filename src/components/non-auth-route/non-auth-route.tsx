import { getUserFailed, getUserSuccess } from '../../services/actions/auth';
import { Redirect, Route, useLocation, RouteProps } from 'react-router-dom';
import { FC, ReactNode, useEffect, useState } from 'react';
import { getUser } from '../../utils/data';
import { ILocationState } from '../../utils/types';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';

export const NonAuthRoute: FC<RouteProps> = ({ children, ...rest }: RouteProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation<ILocationState>();

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

  const user = useAppSelector(store => store.auth.user);

  if (loading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(): ReactNode =>
        user ? (
          <Redirect
            to={{
              pathname: location.state?.from || '/'
            }}
            push={false}
          />
        ) : (
          children as ReactNode
        )
      }
    />
  );
}