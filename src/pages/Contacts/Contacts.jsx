import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from '~/components/Filter';
import { Section } from '~/components/ui/Section';

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
