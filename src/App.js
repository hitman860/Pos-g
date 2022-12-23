import React  from 'react';
import './App.css';
import Header from '../src/Components/pos_header/Header'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/login';
import UserProvider from './Components/context/userContext';
import Page404 from './pages/Page404';
import Addpro from './pages/Addpro';
import Testpage from './pages/testpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/addpro' element={<Addpro/>} />
        <Route path='/testpage' element={<Testpage />}/>
        <Route path='/*' element={<Page404/>}/> 
      </Routes> 
       </UserProvider>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
