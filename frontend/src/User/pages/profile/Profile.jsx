import './profile.scss'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import Posts from '../../components/posts/Posts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, IconButton, Popover, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Profile = () => {
   const [myProfile, setMyProfile] = useState([])
   const [rowLot, setRowLot] = useState(null)

   const Uid = sessionStorage.getItem('uId')
   const fetchMyProfile = () => {
      axios.get(`http://localhost:5000/User/${Uid}`).then((response) => {
         console.log(response.data.user)
         setMyProfile(response.data.user)
      })
   }

   const fetchLotData = () => {
      axios
         .get(`http://localhost:5000/AuctionheadWon/${Uid}`)
         .then((response) => {
            console.log(response.data.auctionhead)
            setRowLot(response.data.auctionhead)
         })
   }

   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
   };

   const open = Boolean(anchorEl);
   const id = open ? 'simple-popper' : undefined;

   useEffect(() => {
      fetchMyProfile()
      fetchLotData()
   }, [])

   return (
      <div className='profile'>
         <div className='images'>
            <img
               src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
               alt=''
               className='cover'
            />
            <img
               src={myProfile.photo}
               alt=''
               className='profilePic'
            />
         </div>
         <div className='profileContainer'>
            <div className='uInfo'>
               <div className='left'>
                  {/* <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a> */}
               </div>
               <div className='center'>
                  <span>{myProfile.name}</span>
                  <span>{myProfile.email}</span>
                  <span>{myProfile.contact}</span>
                  <div className='info'>
                     <div className='item'>
                        {/* <PlaceIcon />
                <span>USA</span> */}
                     </div>
                     <div className='item'>
                        {/* <LanguageIcon />
                <span>lama.dev</span> */}
                     </div>
                  </div>
               </div>
               <div className='right'>
                  {/* <EmailOutlinedIcon /> */}
                  <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                      <MoreVertIcon />
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
                    <Box sx={{ m: 2, width: 180, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>

                     <Link to={'/User/EditProfile'}>

                     <Button  sx={{ width: '100%' }}> Edit Profile</Button>
                     </Link>
                     <Link to={'/User/ChangePassword'}>

                     <Button sx={{ width: '100%' }}>Change Password</Button>
                     </Link>
                  </Box>
               </Popover>
               </div>
            </div>
            <Typography variant='h4' className='dancing-script' textAlign={'center'} sx={{m:5}}>Your Winnings</Typography>
            {rowLot && <Posts rowLot={rowLot} />}
         </div>
      </div>
   )
}

export default Profile
