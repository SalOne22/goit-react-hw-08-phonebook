import { Flex, Spacer, useColorMode } from '@chakra-ui/react';
import { Navigation } from './Navigation';
import { AuthenticationButtons } from './AuthenticationButtons';

export const Header = () => {
  const { colorMode } = useColorMode();
  const headerBgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';

  return (
    <header>
      <Flex py={2} px={8} bgColor={headerBgColor} color="white">
        <Navigation />
        <Spacer />
        <AuthenticationButtons />
      </Flex>
    </header>
  );
};
