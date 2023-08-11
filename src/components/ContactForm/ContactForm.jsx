import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = ({ name, phone }) => {
    const contactName = name.trim();

    if (
      contacts.find(
        contact => contactName.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    return dispatch(addContact({ name, phone }));
  };

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
