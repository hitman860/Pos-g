import React  from 'react';
import './App.css';
import Pmain from '../src/Components/pos_main/Pmian'
import Header from '../src/Components/pos_header/Header'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
    <Pmain />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
