import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayContact, selectFilter } from './selectors';

import * as filterActions from './filterSlice';
import { addContact, deleteContactId } from './operations';

export const useContacts = () => {
  const contacts = useSelector(selectDisplayContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContact(newContact));
  };
  const deleteContact = id => {
    dispatch(deleteContactId(id));
  };
  const filterContacts = value => {
    dispatch(filterActions.filterContacts(value));
  };

  return { contacts, filter, addNewContact, deleteContact, filterContacts };
};
