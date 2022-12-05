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
interface AddAction {
  payload: Product;
  type?: string;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: AddAction) => {
      const newProduct: Product = action.payload;
      state.products.push(newProduct);
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
