import { configureStore } from '@reduxjs/toolkit';
import { fridgeReducer } from './fridgeSlice';
import { recipesReducer } from './recipesSlice';
import 

export const store = configureStore({
  reducer: {
    fridge: fridgeReducer,
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch