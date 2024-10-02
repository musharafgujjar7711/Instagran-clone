

import React from 'react';
import Navbar from './Components/Button'; // Assuming this is your navigation bar
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import Home from './Components/Home';
import Post from './Components/Post';
import Stores from './Components/Stores';
import MyProfile from './Components/MyProfile';
import Button from './Components/Button';
import Shorts from './Components/Shorts';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
       <div className=' flex md:flex-col flex-col-reverse '>
      <div className=''>
        <Button/>
      </div>
        <Routes >   
        <Route path='/' element={<Home/>} /> 
          <Route path='/video/search'  element={<Search />} />
          <Route path='/video/stores/' element={<Stores />} />
          <Route path='/video/profile/' element={<MyProfile />} />
          <Route path='/video/shorts/' element={<Shorts />} />
        </Routes>
       </div>

      </BrowserRouter>
    </div>
  );
}

export default App;

