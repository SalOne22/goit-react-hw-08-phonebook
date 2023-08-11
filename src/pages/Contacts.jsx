import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Section } from '../components/Section';

const Contacts = () => {
  return (
    <div>
      <Section title="Create new contact">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactList
          contacts={[
            { id: '1', name: 'John Doe', phone: '+12 24 45 234' },
            { id: '2', name: 'Alex Brann', phone: '+22 32 21 243' },
            { id: '3', name: 'Richard Flow', phone: '+32 43 21 342' },
            { id: '4', name: 'Herbert Will', phone: '+53 24 43 234' },
          ]}
        />
      </Section>
    </div>
  );
};

export default Contacts;
