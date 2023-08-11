import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts = [] }) => {
  const handleDelete = id => {
    console.log(id);
  };

  return (
    <ul className="flex flex-col gap-4">
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};
