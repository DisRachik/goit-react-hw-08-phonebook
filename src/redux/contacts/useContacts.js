import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './selectors';

import * as contactsActions from './contactsSlice';
import * as filterActions from './filterSlice';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(contactsActions.addNewContact(newContact));
  };
  const deleteContact = id => {
    dispatch(contactsActions.deleteContact(id));
  };
  const filterContacts = value => {
    dispatch(filterActions.filterContacts(value));
  };

  return { contacts, filter, addNewContact, deleteContact, filterContacts };
};
