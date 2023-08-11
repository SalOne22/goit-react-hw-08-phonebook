import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isRejectedAction = action => action.type.endsWith('rejected');
const isPendingAction = action => action.type.endsWith('pending');
const isFulfilledAction = action => action.type.endsWith('fulfilled');

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.items = [];
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload,
        );
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isFulfilledAction, state => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = slice.reducer;
