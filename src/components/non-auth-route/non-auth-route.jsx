import { getUserFailed, getUserSuccess } from '../../services/actions/auth';
import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../utils/data';

export function NonAuthRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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

  const user = useSelector(store => store.auth.user);

  if (loading) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}