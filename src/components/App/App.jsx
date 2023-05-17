import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList, Filter } from 'components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { name } = newContact;
    const auditNewContact = name.toLowerCase();
    if (
      this.state.contacts.find(
        ({ name }) => name.toLowerCase() === auditNewContact
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onFilter = e => this.setState({ filter: e.target.value });

  displayContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.onFilter} />
          <ContactList
            contacts={this.displayContacts()}
            onRemove={this.removeContact}
          />
        </Section>
      </Layout>
    );
  }
}
