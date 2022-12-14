import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../products/productsSlice';

interface RecipesState {
  recipes: Recipe[];
}

export interface Recipe {
  title: string;
  description: string;
  products: Product[];
  imgUrl: string;
}

interface AddAction {
  payload: Recipe;
  type?: string;
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add: (state, action: AddAction) => {
      const newRecipe: Recipe = action.payload;
      state.recipes.push(newRecipe);
    },
  },
});

export const recipesActions = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
