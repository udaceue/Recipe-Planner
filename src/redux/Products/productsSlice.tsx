import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ProductsState {
  name: string;
  amount: number;
  weight: number;
}

// Define the initial state using that type
const initialState: ProductsState = {
  name: '',
  amount: 0,
  weight: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
