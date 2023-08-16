import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '~/service/api';

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

export const registerUser = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      return await api.registerUser(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      return await api.loginUser(user);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    api.setToken(token);

    try {
      return await api.getCurrentUser();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    return await api.logout();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
