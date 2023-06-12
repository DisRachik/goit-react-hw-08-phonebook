import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './selectors';

import * as actions from './contactsSlice';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(actions.addNewContact(newContact));
  };
  const deleteContact = id => {
    dispatch(actions.deleteContact(id));
  };
  const filterContacts = value => {
    dispatch(actions.filterContacts(value));
  };

  return { contacts, filter, addNewContact, deleteContact, filterContacts };
};
