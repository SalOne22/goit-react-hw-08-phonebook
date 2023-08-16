import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '~/redux/selectors';

export const PrivateRoute = ({ children, to = '/' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) return <Navigate to={to} />;

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};
