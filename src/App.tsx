import Container from './common/styled/Container.Styled';
import GlobalStyles from './common/styled/Global';
import HomePage from './pages/HomePage';

function App() {
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
