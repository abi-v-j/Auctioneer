import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button,IconButton, Popover, Typography } from '@mui/material'
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
               className='Link'
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
            <Link to='/User/'
               className='Link'

               style={{ textDecoration: 'none' }}
            >
               <HomeOutlinedIcon />
            </Link>
            {color ? (
               <DarkModeIcon onClick={() => setColor(!color)} />
            ) : (
               <LightModeIcon onClick={() => setColor(!color)} />
            )}
         </div>
         <div className='right'>

            {/* <NotificationsOutlinedIcon /> */}
            <div className='user'>
               <IconButton aria-describedby={id} type="button" onClick={handleClick}>

                  <Avatar
                  />
               </IconButton>
               <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClick}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
               >             
                    <Box sx={{ m: 2, width: 180, height: 215, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Link to={'/User/Profile'}>

                     <Button sx={{ width: '100%' }}>Profile</Button>
                     </Link>

                     <Link to={'/User/ViewMyLot'}>
                        <Button sx={{ width: '100%' }}>My Winnings</Button>
                     </Link>

                     
                     <Link to={'/User/Complaint'}>
                        <Button sx={{ width: '100%' }}>Complaint</Button>
                     </Link>

                     
                     <Link to={'/User/Feedback'}>
                        <Button sx={{ width: '100%' }}>Feedback</Button>
                     </Link>
                     <Link to={'/'} style={{width:'100%'}}>

                     <Button variant='outlined' sx={{ width: '100%' }} fullWidth>LogOut</Button>
                     </Link>
                  </Box>
               </Popover>
               {/* <span>{currentUser.name}</span> */}
            </div>
         </div>
      </div>
   )
}

export default Navbar
