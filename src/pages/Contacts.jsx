import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { Section } from '../components/Section';
import { selectIsAuthenticated } from '../redux/selectors';

const Contacts = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter mb={4} />
        <ContactList />
      </Section>
    </>
  );
};

export default Contacts;
