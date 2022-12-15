import { useEffect, useState } from 'react';
import Container from './common/styled/Container.Styled';
import GlobalStyles from './common/styled/Global';
import fakeFetch from './data/fakeFetch';
import productsData from './data/productsDataMock';
import recipesData from './data/recipesDataMock';
import HomePage from './pages/HomePage';
import useAppDispatch from './redux/hooks/useAppDispatch';
import { productsActions } from './redux/products/productsSlice';
import { recipesActions } from './redux/recipes/recipesSlice';

function App() {
  const dispatch = useAppDispatch();

  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const recipesFetchResult = await fakeFetch(recipesData);
      dispatch(recipesActions.add(recipesFetchResult));
      const productsFetchResult = await fakeFetch(productsData);
      dispatch(productsActions.add(productsFetchResult));
      setDataIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>{dataIsLoading ? <h1>Loading data...</h1> : <HomePage />}</Container>
    </>
  );
}

export default App;
