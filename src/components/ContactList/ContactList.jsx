import { useContacts } from 'redux/contacts/useContacts';

import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const { contacts, filter, deleteContact } = useContacts();

  const displayContacts = (() => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <ContactItems>
      {displayContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <RiBodyScanFill size={32} />
          {name}: <span>{number}</span>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            <RiUserUnfollowFill size={24} />
          </BtnDelete>
        </ContactItem>
      ))}
    </ContactItems>
  );
};
