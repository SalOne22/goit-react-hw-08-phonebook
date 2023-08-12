import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './LoginForm.styled';
import { loginUser } from '../../redux/operations';
import { selectUserError } from '../../redux/selectors';
import { clearError } from '../../redux/authSlice';

export const LoginForm = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    email = email.trim();
    password = password.trim();

    return dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (error !== null) {
      toast({
        title: error,
        status: 'error',
        isClosable: true,
      });

      dispatch(clearError());
    }
  }, [error, toast, dispatch]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
