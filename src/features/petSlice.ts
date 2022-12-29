/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface AdoptedPet {
  value: Pet | null;
}

const initialState: AdoptedPet = {
  value: null,
};

export const adoptedPetSlice = createSlice({
  name: 'adoptedPet',
  initialState,
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
