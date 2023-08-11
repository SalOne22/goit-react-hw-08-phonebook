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
