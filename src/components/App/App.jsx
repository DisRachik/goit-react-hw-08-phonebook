import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList, Filter } from 'components';

const SAVED_CONTACTS = 'contacts';

const savedContacts = () => {
  const contactItem = localStorage.getItem(SAVED_CONTACTS);
  return contactItem ? JSON.parse(contactItem) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(savedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(SAVED_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const auditNewContact = newContact.name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === auditNewContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const onFilter = e => setFilter(e.target.value);

  const displayContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onFilter} />
        <ContactList contacts={displayContacts()} onRemove={removeContact} />
      </Section>
    </Layout>
  );
};
