import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from './recipes/recipesSlice';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
