import React, { useState } from 'react';
import './App.css';

function App() {
  // let name = 'Chin';
  // ['Chin',  setStateName]

  const [name, setName] = useState('Chin');
  // const [stateName, setStateName] = useState(initialValue);

  // const name = state[0];
  // const setName = state[1];
  // console.log('name', name);

  console.log('App render: ', name);

  function handleChangeName() {
    // console.log(name);
    setName('Vil');
    // name = 'Vil'
    console.log(name);
  }
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <h3>{name}</h3>
      <button onClick={handleChangeName}>Change name</button>
    </div>
  );
}

export default App;
