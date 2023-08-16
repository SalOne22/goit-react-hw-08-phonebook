import { Text, Button } from '@chakra-ui/react';
import { Section } from '../components/ui/Section';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Section title="Home">
      <Text fontSize="lg">
        Discover seamless contact management with our Phone Book website.
        <br />
        Effortlessly store, update, and access your contacts in one place.
      </Text>
      <Button mt={6} colorScheme="green" as={NavLink} to="/contacts">
        Get started
      </Button>
    </Section>
  );
};
export default Home;
