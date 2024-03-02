import { Link } from 'react-router-dom'
import './post.scss'

import { CardMedia } from '@mui/material'

const Post = () => {
   

   return (
      <div className='post'>
         <div className='container'>
            <div className='user'>
               <div className='userInfo'>
                  <img
                     src={''}
                     alt=''
                  />
                  <div className='details'>
                   
                     <span className='name'>{''}</span>
                     <span className='date'></span>
                  </div>
               </div>
               {/* <MoreHorizIcon /> */}
            </div>
            <div className='content'>
               <p>{''}</p>
               <CardMedia
                  image={''}
                  alt=''
                  sx={{ height: 400 }}
               />
            </div>
            <div className='info'>
               <div className='item'>
                 <Link
                to={`/profile/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
View More
                     </Link>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default Post
