import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContactId, fetchContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder => {
    builder
      // first fetch
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      // delete contact
      .addCase(deleteContactId.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      // add contact
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      // duplicate actions for all fulfilled
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContactId.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      // duplicate actions for all rejected
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContactId.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
