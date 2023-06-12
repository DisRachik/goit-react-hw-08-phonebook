import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

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
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            <RiUserUnfollowFill size={24} />
          </BtnDelete>
        </ContactItem>
      ))}
    </ContactItems>
  );
};
