import { Component } from 'react';
import { Layout } from './Layout.styled';
import { Section, ContactForm, ContactList } from 'components';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Layout>
    );
  }
}
