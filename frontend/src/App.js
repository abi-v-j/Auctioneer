import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './Admin/App';
import Guest from './Guest/App';
import User from './User/App';
import Dealer from './Dealer/App';
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
      <Route path='/Dealer/*' element={ <Dealer/>} />

    </Routes>
  )
}
export default App