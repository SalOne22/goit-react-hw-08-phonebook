import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { Section } from '../components/Section';
import { selectIsAuthenticated } from '../redux/selectors';

const Register = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) return <Navigate to="/contacts" />;

  return (
    <Section title="Register">
      <RegisterForm />
    </Section>
  );
};
export default Register;
