import Home from "./Pages/home/Home";
import Single from "./Pages/single/Single";
import {  Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Category from "./Pages/Category";
import District from "./Pages/District";
import Place from "./Pages/Place";
import State from "./Pages/State";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ViewLot from "./Pages/ViewLot";
import { Box } from "@mui/material";
import AssignAuction from "./Pages/AssignAuction";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="homeMain">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Box sx={{m:5}}>

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path=":userId" element={<Single />} /> */}
            <Route path='/Category' element={<Category />} />
            <Route path='/District' element={<District />} />
            <Route path='/Place' element={<Place />} />
            <Route path='/State' element={<State />} />
            <Route path='/ViewLot' element={<ViewLot />} />
            <Route path='/AssignAuction/:id' element={<AssignAuction />} />
          </Routes>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;