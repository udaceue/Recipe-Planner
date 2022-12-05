import { createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  products: Product[];
}

export interface Product {
  name: string;
  amount?: number;
  weight?: number;
  inStock: boolean;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state) => {
      const newProduct: Product = {
        name: 'cucumber',
        amount: 1,
        weight: 300,
        inStock: true,
      };
      state.products.push(newProduct);
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
