import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Assets/scss/styles.scss';

import Home from './Views/Pages';
import Users from './Views/Pages/Users';
import Clients from './Views/Pages/Clients';
import Settings from './Views/Pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
