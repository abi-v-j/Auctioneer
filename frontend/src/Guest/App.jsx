import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import Dealer from './Pages/Dealer';
import Login from './Pages/Login';
import VerifyRegistration from './Pages/VerifyRegistration';

const App = () => {
    return (
        <Routes>
            <Route path='/UserRegistration' element={<User />} />
            <Route path='/DealerRegistration' element={<Dealer />} />
            <Route path='/' element={<Login/>} />
            <Route path='/VerifyRegistration' element={<VerifyRegistration />} />
        </Routes>
    )
}
export default App