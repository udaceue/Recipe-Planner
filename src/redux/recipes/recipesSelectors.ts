import { RootState } from '../store';

const selectRecipesSlice = (state: RootState) => state.recipes;

const selectRecipes = (state: RootState) => selectRecipesSlice(state).recipes;

export const recipesSelectors = { selectRecipesSlice, selectRecipes };
