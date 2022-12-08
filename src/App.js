import React  from 'react';
import './App.css';
import Header from '../src/Components/pos_header/Header'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/login';
import UserProvider from './Components/context/userContext';
import Page404 from './pages/Page404';
function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/*' element={<Page404/>}/> 
      </Routes>
      </BrowserRouter>
      </UserProvider>
    
    </div>
  );
}

export default App;
