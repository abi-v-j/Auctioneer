import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import Dealer from './Pages/Dealer';
import Login from './Pages/Login';

const App = () => {
    return (
        <Routes>
            <Route path='/User' element={<User />} />
            <Route path='/Dealer' element={<Dealer />} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
    )
}
export default App