import { useEffect } from 'react';
import Container from './common/styled/Container.Styled';
import GlobalStyles from './common/styled/Global';
import setStoreData from './data/fetchData';
import HomePage from './pages/HomePage';
import useAppDispatch from './redux/hooks/useAppDispatch';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    ;
  }, []);
  return (
    <>
      <GlobalStyles />
      <Container>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
