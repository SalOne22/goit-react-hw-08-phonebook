import { Flex, Spacer, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { AuthenticationButtons } from './AuthenticationButtons';
import { selectIsAuthenticated } from '../redux/selectors';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const { colorMode } = useColorMode();
  const headerBgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';

  return (
    <header>
      <Flex py={2} px={8} bgColor={headerBgColor} color="white">
        <Navigation />
        <Spacer />
        {isAuthenticated ? <UserMenu /> : <AuthenticationButtons />}
      </Flex>
    </header>
  );
};
