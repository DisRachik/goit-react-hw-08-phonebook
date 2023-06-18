import { createSlice } from '@reduxjs/toolkit';
import { deleteContactId, fetchContacts } from './operations';

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
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // delete contact
      .addCase(deleteContactId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(deleteContactId.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // add contact
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
