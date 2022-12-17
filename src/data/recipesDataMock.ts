import { Recipe } from '../redux/recipes/recipesSlice';

const recipesData: Recipe[] = [
  {
    title: 'Chicken and Biscuits Bake',
    description:
      'In a large pot melt the butter. Add the onion, stir until softened. Whisk in the flour. Whisk in the heavy cream. At the same time, fry chicken pieces. Add the mixed vegetables and fried chicken. Transfer to baking dish. Evenly top with 12 biscuits. Baked in 180C for 20 minutes.',
    products: [
      { name: 'butter', weight: 85 },
      { name: 'onion', amount: 1 },
      { name: 'flour', weight: 60 },
      { name: 'chicken broth', weight: 700 },
      { name: 'cream', weight: 250 },
      { name: 'frozen vegetable', weight: 450 },
      { name: 'chicken', weight: 500 },
      { name: 'biscuits', amount: 12 },
    ],
    imgUrl:
      'https://www.thecountrycook.net/wp-content/uploads/2022/04/1st-image-Chicken-and-Biscuits-Casserole-720x1080.jpg',
  },

  {
    title: 'Southern Tomato Pie',
    description:
      'Decore pie crust with sliced tomatoes. Then top with green onions, basil and crumbled bacon. In a bowl combine mayonnaise with shredded cheese. Spread the cheese mixture on the top of the pie. Bake at 200C for 30 minutes.',
    products: [
      { name: 'tomato', amount: 2 },
      { name: 'pie crust', amount: 1 },
      { name: 'onion', amount: 1 },
      { name: 'basil leaf', amount: 5 },
      { name: 'bacon', weight: 100 },
      { name: 'mayonnaise', weight: 50 },
      { name: 'cheese', weight: 200 },
    ],
    imgUrl:
      'https://www.thecountrycook.net/wp-content/uploads/2012/06/slice-tomato-and-bacon-pie-with-melted-cheese-on-a-white-plate.jpg',
  },
];

export default recipesData;
