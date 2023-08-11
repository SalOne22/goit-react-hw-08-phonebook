import PropTypes from 'prop-types';
import { Box, Container, Heading } from '@chakra-ui/react';

export const Section = ({ title, children }) => (
  <Box py={8}>
    <Container maxW="container.xl">
      <Heading as="h2" mb={4}>
        {title}
      </Heading>
      {children}
    </Container>
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
