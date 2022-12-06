import { createSlice } from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/types/setup/directApi';

interface ProductsState {
  products: Product[];
}

interface ProductTypes {
  ProductWithAmount: { name: string; amount: number; inStock?: boolean };
  ProductWithWeight: { name: string; weight: number; inStock?: boolean };
}

export type Product = ProductTypes['ProductWithAmount'] | ProductTypes['ProductWithWeight'];
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
