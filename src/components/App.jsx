import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ScreenLoader } from './ui/ScreenLoader';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { selectIsAuthenticated, selectToken } from '~/redux/selectors';
import { refreshUser } from '~/redux/operations';

const Home = lazy(() => import('~/pages/Home'));
const Contacts = lazy(() => import('~/pages/Contacts'));
const Login = lazy(() => import('~/pages/Login'));
const Register = lazy(() => import('~/pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!token || isAuthenticated) return;

    dispatch(refreshUser());
  }, [dispatch, isAuthenticated, token]);

  return (
    <Suspense fallback={<ScreenLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute to="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute to="/contacts">
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute to="/contacts">
                <Register />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
