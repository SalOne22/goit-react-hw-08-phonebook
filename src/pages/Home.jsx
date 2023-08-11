import { Text, Button } from '@chakra-ui/react';
import { Section } from '../components/Section';

const Home = () => {
  return (
    <Section title="Home">
      <Text fontSize="lg">
        Discover seamless contact management with our Phone Book website.
        <br />
        Effortlessly store, update, and access your contacts in one place.
      </Text>
      <Button mt={6} colorScheme="green">
        Get started
      </Button>
    </Section>
  );
};
export default Home;
