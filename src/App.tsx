import React, { useEffect, useState } from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { UserPage } from './pages/UserPage';
import { TodosPage } from './pages/TodosPage';
import { NavLink } from 'react-router-dom';
import { UserItemPage } from './components/UserItemPage';

function App() {

  return (
    
    <BrowserRouter>
     <div className="App">
      <div>
        <NavLink to='/users'>users</NavLink><br />
        <NavLink to='/todos'>todos</NavLink>
      </div>
        <Routes>
          <Route path='/users' element={<UserPage/>} />
          <Route path='/todos' element = {<TodosPage/>}/>
          <Route path='/users/:id' element = {<UserItemPage/>}/>
        </Routes>
     </div>
    </BrowserRouter>

    
  );
}

export default App;
