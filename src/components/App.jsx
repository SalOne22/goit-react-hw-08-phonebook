import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenLoader } from './ScreenLoader';
import { Layout } from './Layout';
import { selectIsAuthenticated, selectToken } from '../redux/selectors';
import { refreshUser } from '../redux/operations';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

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
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
