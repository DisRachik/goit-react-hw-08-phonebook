import PropTypes from 'prop-types';
import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <ContactItems>
    {contacts.map(({ id, name }) => (
      <ContactItem key={id}>
        <RiBodyScanFill size={32} />
        {name}

        <BtnDelete type="button">
          <RiUserUnfollowFill size={24} />
        </BtnDelete>
      </ContactItem>
    ))}
  </ContactItems>
);
