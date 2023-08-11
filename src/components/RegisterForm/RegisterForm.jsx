import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from './RegisterForm.styled';

const nameRegExp = /^[A-Za-z\u0080-\uFFFF ']+$/;

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is a required field')
      .matches(
        nameRegExp,
        'Name may contain only letters, apostrophe, dash and spaces.',
      ),
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  })
  .required();

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, email, password }) => {
    console.log(name, email, password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired isInvalid={errors.name}>
        <FormLabel>Name</FormLabel>
        <Input type="text" {...register('name')} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.email}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register('email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <Input type="password" {...register('password')} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button mt={6} type="submit" colorScheme="green" isLoading={isSubmitting}>
        Log in
      </Button>
    </Form>
  );
};
