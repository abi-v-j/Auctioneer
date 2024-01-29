import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './Admin/App';
import Guest from './Guest/App';
import User from './User/App';
import Checker from './Checker/App';
import { io } from "socket.io-client";



const App = () => {


  useEffect(()=> {
    const socket = io("http://localhost:5000");
    socket.emit('sample', { msg:'hai' },(response) => {
      console.log(response.status); // ok
    })



  },[])
  return (
    <Routes>
      
      <Route path='/Admin/*' element={ <Admin/>} />
      <Route path='/Guest/*' element={ <Guest/>} />
      <Route path='/User/*' element={ <User/>} />
      <Route path='/Checker/*' element={ <Checker/>} />

    </Routes>
  )
}
export default App