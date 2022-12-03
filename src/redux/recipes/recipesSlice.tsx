import { createSlice } from '@reduxjs/toolkit';

interface RecipesState {
  recipes: object[];
}

interface Recipe {
  title: string;
  description: string;
  products: string[];
  img: string;
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add: (state) => {
      const newRecipe: Recipe = {
        title: 'cucumber',
        description: 'asdasd',
        products: ['first'],
        img: 'http://some-server/recipe.jpg',
      };
      state.recipes.push(newRecipe);
    },
  },
});

export const recipesActions = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
