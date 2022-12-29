/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface ISearchOptions {
  value: SearchOptions;
}

const initialState: ISearchOptions = {
  value: {
    animal: 'dog',
    location: '',
    breed: '',
  },
};

const searchSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchSlice.actions;
export default searchSlice.reducer;
