import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ className = '' }) => {
  return (
    <ul className={`menu menu-horizontal px-1 gap-1 ${className}`}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};
