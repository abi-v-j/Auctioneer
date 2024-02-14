import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import Auction from "./components/Auction/Auction";


const  App = () => {
    return (
      <Routes>
        <Route path="/Auction" element={<Auction/>} />
      </Routes>
      // <div className={`theme-dark`}>
      //   <Navbar />
      //   <div style={{ display: "flex" }}>
      //     <LeftBar />
      //     <div style={{ flex: 6 }}>
      //      <Routes>
      //       <Route path="/" element={<Home/>} />
      //       <Route path="/Profile" element={<Profile/>} />

      //      </Routes>
      //     </div>
      //     <RightBar />
      //   </div>
      // </div>
    );



  
}

export default App;