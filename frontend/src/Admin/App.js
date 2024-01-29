import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Category from "./Pages/Category";
import District from "./Pages/District";
import Place from "./Pages/Place";
import State from "./Pages/State";
import CheckerRegistration from "./Pages/CheckerRegistration";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="homeMain">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":userId" element={<Single />} />
            <Route path='/Category' element={<Category />} />
            <Route path='/District' element={<District />} />
            <Route path='/Place' element={<Place />} />
            <Route path='/State' element={<State />} />
            <Route path='/CheckerRegistration' element={<CheckerRegistration />} />
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;