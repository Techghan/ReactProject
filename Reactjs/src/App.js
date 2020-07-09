import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
//import DeshBoard from './Components/Master';
import Main from './Components/MainComponent';
//import './js/costum.js';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Main/>
   </BrowserRouter>
    </div>
  );
}
export default App;

