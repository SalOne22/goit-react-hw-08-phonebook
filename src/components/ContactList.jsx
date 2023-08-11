import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  List,
  ListItem,
  Flex,
  Text,
  IconButton,
  Spinner,
} from '@chakra-ui/react';
import { fetchContacts, deleteContact } from '../redux/operations';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteredContacts,
} from '../redux/selectors';
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
      <Box>
        <Spinner aria-label="loading contacts" />
      </Box>
    );

  return (
    <List spacing={2}>
      {filteredContacts.map(({ name, phone, id }) => (
        <ListItem key={id}>
          <Flex gap={3}>
            <Flex gap={1}>
              <Text fontWeight={500}>{name}:</Text>
              <Text>{phone}</Text>
            </Flex>
            <IconButton
              isRound
              variant="ghost"
              size="xs"
              colorScheme="red"
              onClick={() => handleDelete(id)}
              aria-label="Delete contact"
              icon={<CloseIcon />}
            />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};
