import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MyProfile from './Pages/MyProfile';
import AddLot from './Pages/AddLot';

const App = () => {
    return (
        <Routes>
            <Route path='/MyProfile' element={<MyProfile />} />
            <Route path='/AddLot' element={<AddLot />} />
        </Routes>
    )
}
export default App