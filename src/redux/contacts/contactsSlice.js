import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';

const initialState = { contacts: [], filter: '' };

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

const persistedContactsSlice = persistReducer(
  { key: 'contacts', storage, blacklist: ['filter'] },
  contactsSlice.reducer
);

export const { addNewContact, deleteContact, filterContact } =
  contactsSlice.actions;

export default persistedContactsSlice;
