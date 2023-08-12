import { List, ListItem, Button, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/selectors';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const { colorMode } = useColorMode();
  const buttonHoverColor =
    colorMode === 'light' ? 'whiteAlpha.500' : 'blackAlpha.500';

  return (
    <nav>
      <List display="flex" gap={1}>
        <ListItem>
          <Button
            variant="ghost"
            _hover={{
              bgColor: buttonHoverColor,
            }}
            as={NavLink}
            to="/"
          >
            Home
          </Button>
        </ListItem>
        {isAuthenticated && (
          <ListItem>
            <Button
              variant="ghost"
              _hover={{ bgColor: buttonHoverColor }}
              as={NavLink}
              to="/contacts"
            >
              Contacts
            </Button>
          </ListItem>
        )}
      </List>
    </nav>
  );
};
