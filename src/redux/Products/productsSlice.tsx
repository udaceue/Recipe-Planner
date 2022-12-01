import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ProductsState {
  products: object[];
}

interface Product {
  name: string;
  amount: number;
  weight: number;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      const newProduct: Product = {
        name: 'cucumber',
        amount: 1,
        weight: 300,
      };
      state.products.push(newProduct);
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
