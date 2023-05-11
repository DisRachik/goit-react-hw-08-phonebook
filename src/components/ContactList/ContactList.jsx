import PropTypes from 'prop-types';
import { RiBodyScanFill, RiUserUnfollowFill } from 'react-icons/ri';
import { ContactItems, ContactItem, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <ContactItems>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <RiBodyScanFill size={32} />
        {name}: <span>{number}</span>
        <BtnDelete type="button">
          <RiUserUnfollowFill size={24} />
        </BtnDelete>
      </ContactItem>
    ))}
  </ContactItems>
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // removeContact: PropTypes.func.isRequired,
};
