import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Section } from '../components/Section';
import { selectIsAuthenticated } from '../redux/selectors';

const Login = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) return <Navigate to="/contacts" />;

  return (
    <Section title="Login">
      <LoginForm />
    </Section>
  );
};
export default Login;
