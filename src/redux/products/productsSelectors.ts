import { RootState } from '../store';

const selectProductsSlice = (state: RootState) => state.products;

const selectProducts = (state: RootState) => selectProductsSlice(state).products;

export const productsSelectors = { selectProductsSlice, selectProducts };
