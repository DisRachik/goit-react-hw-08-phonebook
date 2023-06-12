import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList, Filter } from 'components';

export const App = () => {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Layout>
  );
};
