import { getUser } from '../../services/actions/auth';
import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {
  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const init = async () => {
    await dispatch(getUser());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}