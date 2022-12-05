import CustomHeader from '../common/ui/CustomHeader';
import Categories from '../common/ui/Categories';
import useAppDispatch from '../redux/hooks/useAppDispatch';
import { recipesActions } from '../redux/recipes/recipesSlice';

function HomePage() {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    const newRecipe = {
      title: 'Pancake',
      description: 'Too easy to write description',
      products: [{ name: 'Apple', amount: 3, inStock: true }],
      imgUrl:
        'https://www.oetker.pl/Recipe/Recipes/oetker.pl/pl-pl/dessert/image-thumb__98554__RecipeDetail/puszyste-pancake@2x.webp',
    };
    dispatch(recipesActions.add(newRecipe));
  };

  return (
    <>
      <CustomHeader />
      <Categories />

      {/* <button onClick={handleAddProduct} style={{ width: '200px', height: '200px' }}>
        Add product
      </button> */}
    </>
  );
}

export default HomePage;
