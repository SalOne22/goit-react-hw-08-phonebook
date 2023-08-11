import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../service/api';

const api = new Api();

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await api.fetchContacts();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await api.addContact(contact);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await api.deleteContact(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
