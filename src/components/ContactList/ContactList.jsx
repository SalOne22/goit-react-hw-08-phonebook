import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FallingLines } from 'react-loader-spinner';
import { fetchContacts, deleteContact } from '../../redux/operations';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteredContacts,
} from '../../redux/selectors';
import { ContactItem, List } from './ContactList.styled';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) toast.error(error);
  }, [error]);

  if (isLoading)
    return (
      <div>
        <FallingLines
          color="#282828"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );

  return (
    <List>
      {filteredContacts.map(({ name, phone, id }) => (
        <ContactItem key={id}>
          <p>
            {name}: {phone}
          </p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </ContactItem>
      ))}
    </List>
  );
};
