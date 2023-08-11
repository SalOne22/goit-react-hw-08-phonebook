import { ButtonGroup, Button, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthenticationButtons = () => {
  const { colorMode } = useColorMode();

  return (
    <ButtonGroup variant={colorMode === 'light' ? 'solid' : 'outline'}>
      <Button colorScheme="teal" as={NavLink} to="/login">
        Log in
      </Button>
      <Button colorScheme="green" as={NavLink} to="/register">
        Register
      </Button>
    </ButtonGroup>
  );
};
