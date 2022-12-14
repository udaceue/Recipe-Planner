import CustomHeader from '../common/ui/CustomHeader';
import Categories from '../common/ui/Categories';
import useAppDispatch from '../redux/hooks/useAppDispatch';
import { Product, productsActions } from '../redux/products/productsSlice';
import { recipesActions } from '../redux/recipes/recipesSlice';
import Dishes from '../common/ui/Dishes';

function HomePage() {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    const newRecipe = [
      {
        title: 'Pancake',
        description: 'Too easy to write description',
        products: [{ name: 'Apple', amount: 3 }],
        imgUrl:
          'https://www.oetker.pl/Recipe/Recipes/oetker.pl/pl-pl/dessert/image-thumb__98554__RecipeDetail/puszyste-pancake@2x.webp',
      },
    ];
    const newProduct: Product[] = [{ name: 'Apple', amount: 1 }];

    dispatch(recipesActions.add(newRecipe));
    dispatch(productsActions.add(newProduct));
  };

  return (
    <>
      <CustomHeader />
      <Categories />
      <Dishes />
      <button onClick={handleAddProduct} style={{ width: '200px', height: '200px' }}>
        Add
      </button>
    </>
  );
}

export default HomePage;
