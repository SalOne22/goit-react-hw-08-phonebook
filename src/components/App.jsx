import { ThemeProvider } from 'styled-components';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import theme from '../theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </ThemeProvider>
  );
};
