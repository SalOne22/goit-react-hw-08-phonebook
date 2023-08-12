import * as yup from 'yup';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addContact } from '../../redux/operations';
import { selectContacts, selectContactsError } from '../../redux/selectors';
import { Form } from './ContactForm.styled';

const nameRegExp = /^[A-Za-z\u0080-\uFFFF ']+$/;
const phoneRegExp = /^(\+?[0-9.()\-\s]*)$/;

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is a required field')
      .matches(
        nameRegExp,
        'Name may contain only letters, apostrophe, dash and spaces.',
      ),
    phone: yup
      .string()
      .required('Phone is a required field')
      .matches(
        phoneRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      ),
  })
  .required();

export const ContactForm = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const onSubmit = ({ name, phone }) => {
    name = name.trim();
    phone = phone.trim();

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      toast({
        title: `${name} is already in contacts`,
        status: 'error',
        isClosable: true,
      });
      return;
    }

    reset();

    return dispatch(addContact({ name, number: phone }));
  };

  useEffect(() => {
    if (error !== null)
      toast({
        title: error,
        status: 'error',
        isClosable: true,
      });
  }, [error, toast]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired isInvalid={errors.name}>
        <FormLabel>Name</FormLabel>
        <Input type="text" {...register('name')} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.phone}>
        <FormLabel>Number</FormLabel>
        <Input type="tel" {...register('phone')} />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>

      <Button mt={6} type="submit" colorScheme="green" isLoading={isSubmitting}>
        Add contact
      </Button>
    </Form>
  );
};
