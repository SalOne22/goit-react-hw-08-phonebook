import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactOnServer,
  deleteContactOnServer,
  fetchAllContacts,
} from '../service/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await fetchAllContacts();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await addContactOnServer(contact);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactOnServer(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
