import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inner: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.inner = action.payload;
    },
  },
});

export const { updateFilter } = slice.actions;
export const filterReducer = slice.reducer;
