/* eslint-disable import/extensions */
import { useState } from 'react';
import Header from './common/Header';
import ReadTheDocs from './common/ReadTheDocs';
import Container from './common/styled/Container.Styled';
import GlobalStyles from './common/styled/Global';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <div className="card">
          <button type="button" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
        <ReadTheDocs />
      </Container>
    </>
  );
}

export default App;
