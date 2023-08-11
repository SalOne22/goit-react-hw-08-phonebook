import { List, ListItem, Button, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
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
      </List>
    </nav>
  );
};
