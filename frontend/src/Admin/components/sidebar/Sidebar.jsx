import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import { Link } from 'react-router-dom'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

import FeedbackIcon from '@mui/icons-material/Feedback';
import { Box, Card, Typography } from '@mui/material'

const styles = {
   height: '80vh',
   overflowY: 'scroll', // Allow scrolling

   // Hide the default scrollbar
   scrollbarWidth: 'none',
   '-ms-overflow-style': 'none',
   '&::-webkit-scrollbar': {
      display: 'none',
   },
}
const Sidebar = () => {
   return (
      <Card
         className='sidebar'
         sx={{
            height: '85vh', margin: 2, padding: 3, borderRadius: 5,
         }}
      >
         <div className='top'>
            <Link
               to='/'
               style={{ textDecoration: 'none' }}
            >
               <Typography
                  variant='h4'
                  textAlign={'center'}
                  sx={{ p: 2, m: 5 }}
                  className='dancing-script'
               >
                  Auctioneer
               </Typography>
            </Link>
         </div>
         {/* <hr /> */}
         <Box sx={styles}>
            <div className='center'>
               <ul>
               <p className='title'>MAIN</p>
               <Link
               to='/Admin'
               style={{ textDecoration: 'none' }}
            >
                 <li>
                    <HomeIcon className='icon' />
                    <span>Home</span>
                 </li>
                 </Link>
                  <p className='title'>Location</p>
                  <Link to={'/Admin/State'} style={{ textDecoration: 'none' }}>
                     <li>
                        <DashboardIcon className='icon' />
                        <span>State</span>
                     </li>
                  </Link>
                  <Link to={'/Admin/District'} style={{ textDecoration: 'none' }}>

                     <li>
                        <DashboardIcon className='icon' />
                        <span>District</span>
                     </li>
                  </Link>
                  <Link to={'/Admin/Place'} style={{ textDecoration: 'none' }}>

                     <li>
                        <DashboardIcon className='icon' />
                        <span>Place</span>
                     </li>
                  </Link>
                  <p className='title'>Auction</p>
                  <Link
                     to={'/Admin/ViewLot'}
                     style={{ textDecoration: 'none' }}
                  >
                     <li>
                        <PersonOutlineIcon className='icon' />
                        <span>View Lot</span>
                     </li>
                  </Link>

                  <p className='title'>Verify</p>
                  <Link to={'/Admin/Verifydealer'}
                  style={{ textDecoration: 'none' }}
                  >
                     <li>
                        <Diversity2Icon className='icon' />
                        <span>Dealer</span>
                     </li>
                  </Link>
                  <p className='title'>USER</p>
                  <Link to={'/Admin/ViewComplaint'}
                  style={{ textDecoration: 'none' }}
                  >
                 <li>
                    <MarkUnreadChatAltIcon className='icon' />
                    <span>Complaints</span>
                 </li>
                 </Link>
                 <Link to={'/Admin/ViewFeedback'}
                  style={{ textDecoration: 'none' }}
                  >
                 <li>
                    <FeedbackIcon className='icon' />
                    <span>Feedbacks</span>
                 </li>
                 </Link>
                 
                  <p className='title'></p>
                 
                  <li>
                     <ExitToAppIcon className='icon' />
                     <span>Logout</span>
                  </li>
               </ul>
            </div>
            <div className='bottom'>

            </div>
         </Box>
      </Card>
   )
}

export default Sidebar
