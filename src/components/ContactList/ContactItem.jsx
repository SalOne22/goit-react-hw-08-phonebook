import PropTypes from 'prop-types';
import { X } from 'lucide-react';

export const ContactItem = ({ name, phone, onDelete, id }) => {
  return (
    <li className="bg-base-200 rounded-md p-4 flex items-center min-w-[24rem] max-w-fit">
      <p className="flex-1">
        {name}: <span className="font-medium">{phone}</span>
      </p>
      <button
        className="btn btn-ghost btn-sm btn-circle text-2xl"
        onClick={() => onDelete(id)}
      >
        <X />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
