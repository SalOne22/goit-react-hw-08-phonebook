import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts.items;
export const selectFilter = store => store.filter.inner;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  },
);

export const selectContactsError = store => store.contacts.error;
export const selectContactsIsLoading = store => store.contacts.isLoading;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export const selectUserError = state => state.auth.error;
export const selectUserIsLoading = state => state.auth.isLoading;
