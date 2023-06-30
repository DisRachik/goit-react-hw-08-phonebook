import { useContacts } from 'redux/contacts/useContacts';

import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import {
  ContactItems,
  ContactItem,
  BtnDelete,
  ContactWrap,
} from './ContactList.styled';

export const ContactList = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <ContactItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <RiBodyScanFill size={32} aria-label="Icon for the contact" />
          <ContactWrap>
            {name}: <span>{number}</span>
          </ContactWrap>
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
