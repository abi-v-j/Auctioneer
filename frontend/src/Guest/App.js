
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import Dealer from './Pages/Dealer';
import Login from './Pages/Login';
import VerifyRegistration from './Pages/VerifyRegistration';
import Main from './Pages/Main';

const App = () => {
    return (
        <Routes>
            <Route path='/UserRegistration' element={<User />} />
            <Route path='/DealerRegistration' element={<Dealer />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/VerifyRegistration' element={<VerifyRegistration />} />
            <Route path='/' element={< Main/>} />
        </Routes>
    )
}
export default App