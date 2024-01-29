import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MyProfile from './Pages/MyProfile';

const App = () => {
    return (
        <Routes>
            <Route path='/MyProfile' element={<MyProfile />} />
           
        </Routes>
    )
}
export default App