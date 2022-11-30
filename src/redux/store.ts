import { configureStore } from '@reduxjs/toolkit';
import { fridgeReducer } from './fridgeSlice';
import { recipesReducer } from './recipesSlice';

export const store = configureStore({
  reducer: {
    fridge: fridgeReducer,
    recipes: recipesReducer,
  },
});
