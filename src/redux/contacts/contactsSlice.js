import { createSlice, nanoid } from '@reduxjs/toolkit';
const SAVED_CONTACTS = 'contacts';

const contacts = (() => {
  const contactItem = localStorage.getItem(SAVED_CONTACTS);
  return contactItem ? JSON.parse(contactItem) : [];
})();

const initialState = { contacts, filter: '' };

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addNewContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: newContact => ({ payload: { ...newContact, id: nanoid() } }),
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addNewContact, deleteContact, filterContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
