import './App.css';
import React from 'react';
import 'bulma/css/bulma.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
        <Navbar />
        <ItemListContainer />
    </>
  );
}

export default App;
