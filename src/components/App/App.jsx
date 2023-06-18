import { useEffect } from 'react';
import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList, Filter } from 'components';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
