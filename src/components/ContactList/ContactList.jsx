import { useContacts } from 'redux/contacts/useContacts';

import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <ContactItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <RiBodyScanFill size={32} aria-label="Icon for the contact" />
          {name}: <span>{number}</span>
          <BtnDelete
            type="button"
            aria-label="Delete this contact"
            onClick={() => deleteContact(id)}
          >
            <RiUserUnfollowFill size={24} />
          </BtnDelete>
        </ContactItem>
      ))}
    </ContactItems>
  );
};
