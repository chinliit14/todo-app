import React, { useState } from 'react';
import './App.css';

function App() {
 const [counter, setCounter] = useState(0)
  

  function increase() {
    setCounter(counter + 1);
  }
  
  function decrease() {
    setCounter(counter - 1);
  }


  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={increase}>Increase</button>
      <h3>{counter}</h3>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
