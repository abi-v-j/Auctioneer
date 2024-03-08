import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from "react-router-dom";

const Navbar = ({setColor,color}) => {
console.log(color);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {color ? (
          <DarkModeIcon onClick={()=>setColor(!color)} />
        ) : (
          <LightModeIcon onClick={()=>setColor(!color)} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            // src={currentUser.profilePic}
            alt=""
          />
          {/* <span>{currentUser.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;