import { Flex, Text, Spinner } from '@chakra-ui/react';

export const ScreenLoader = () => {
  return (
    <Flex h="100dvh" alignItems="center" justifyContent="center" gap={4}>
      <Text fontSize="2xl" fontWeight={500}>
        Loading
      </Text>
      <Spinner />
    </Flex>
  );
};
