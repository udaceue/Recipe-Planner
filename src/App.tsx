/* eslint-disable import/extensions */
import { useState } from 'react';
import './App.css';
import Header from './common/Header';
import ReadTheDocs from './common/ReadTheDocs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
}

export default App;
