import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import adoptedPet from './features/petSlice';
import searchParams from './features/searchSlice';

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
