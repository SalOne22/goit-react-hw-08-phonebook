import PropTypes from 'prop-types';

export const UserMenu = ({ className = '' }) => {
  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar placeholder"
      >
        <div className="w-10 rounded-full">
          <span className="text-2xl">VV</span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-300 rounded-box w-52"
      >
        <li className="menu-title">mango@mail.com</li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

UserMenu.propTypes = {
  className: PropTypes.string,
};
