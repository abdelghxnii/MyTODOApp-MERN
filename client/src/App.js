import Header from './comps/Header';
import './App.css';
import React from 'react';
import Addtodo from './comps/Addtodo';
import Todos from './comps/Todos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Addtodo></Addtodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
