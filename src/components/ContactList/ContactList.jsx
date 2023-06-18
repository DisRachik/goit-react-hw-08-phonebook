import { useContacts } from 'redux/contacts/useContacts';

import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <ContactItems>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <RiBodyScanFill size={32} />
          {name}: <span>{phone}</span>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            <RiUserUnfollowFill size={24} />
          </BtnDelete>
        </ContactItem>
      ))}
    </ContactItems>
  );
};
