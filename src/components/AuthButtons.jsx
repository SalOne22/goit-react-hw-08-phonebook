import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const AuthButtons = ({ className = '' }) => {
  return (
    <ul className={`flex gap-2 ${className}`}>
      <li>
        <NavLink to="/login" className="btn btn-sm btn-primary">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="btn btn-sm btn-accent">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

AuthButtons.propTypes = {
  className: PropTypes.string,
};
