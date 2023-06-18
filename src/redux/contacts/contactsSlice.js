import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  // reducers: {
  //   addNewContact: {
  //     reducer: (state, { payload }) => {
  //       state.contacts.push(payload);
  //     },
  //     prepare: newContact => ({ payload: { ...newContact, id: nanoid() } }),
  //   },

  //   deleteContact: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(({ id }) => id !== payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      // first fetch
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // delete contact
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
