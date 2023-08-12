import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { Section } from '../components/Section';

const Contacts = () => {
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
