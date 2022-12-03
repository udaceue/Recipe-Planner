import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from './recipesSlice';
import { productsReducer } from './Products/productsSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
