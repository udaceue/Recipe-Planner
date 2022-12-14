import { Product, productsActions } from '../redux/products/productsSlice';
import { Recipe, recipesActions } from '../redux/recipes/recipesSlice';
import productsData from './productsDataMock';
import recipesData from './recipesDataMock';

const fakeFetch = (data: Recipe[] | Product[]) => {
  console.log('---- executing fake fetch -----');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

const addRecipes = () => {
  return recipesData.map((recipe) => {
    recipesActions.add(recipe);
    return recipe;
  });
};

const addProducts = () => {
  return productsData.map((product) => {
    productsActions.add(product);
    return product;
  });
};

const setStoreData = async () => {
  await fakeFetch(addRecipes());
  await fakeFetch(addProducts());
};

export default setStoreData;
