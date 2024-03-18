import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Card, IconButton, Popper, Typography } from '@mui/material'
import { useState } from 'react'

const Navbar = ({ setColor, color }) => {

   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
     setAnchorEl(anchorEl ? null : event.currentTarget);
   };
 
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popper' : undefined;


   console.log(color)
   return (
      <div className='navbar'>
         <div className='left'>
            <Link
               to='/'
               style={{ textDecoration: 'none' }}
            >
               <Typography
                  variant='h4'
                  textAlign={'center'}
                  sx={{ p: 2 }}
                  className='dancing-script'
               >
                  Auctioneer
               </Typography>
            </Link>
            <HomeOutlinedIcon />
            {color ? (
               <DarkModeIcon onClick={() => setColor(!color)} />
            ) : (
               <LightModeIcon onClick={() => setColor(!color)} />
            )}
         </div>
         <div className='right'>

            <NotificationsOutlinedIcon />
            <div className='user'>
               <IconButton aria-describedby={id} type="button" onClick={handleClick}>

               <Avatar
               />
               </IconButton>
               <Popper id={id} sx={{zIndex: 1200}} open={open} anchorEl={anchorEl}>
                  <Card sx={{ border: 1, p: 1, bgcolor: 'background.paper',m:2,width:150,height:200 }}>
                    <Button>Profile</Button>
                    <Button>Edit Profile</Button>
                    <Button>Change Password</Button>
                    <Button></Button>
                  </Card>
               </Popper>
               {/* <span>{currentUser.name}</span> */}
            </div>
         </div>
      </div>
   )
}

export default Navbar
