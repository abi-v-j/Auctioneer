import './post.scss'

import { Button, CardMedia } from '@mui/material'

const Post = ({ post }) => {
   

   return (
      <div className='post'>
         <div className='container'>
            <div className='user'>
               <div className='userInfo'>
                  <img
                     src={post.lotId.dealerId.profileimgsrc}
                     alt=''
                  />
                  <div className='details'>
                     {/* <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              > */}
                     <span className='name'>{post.lotId.dealerId.Name}</span>
                     {/* </Link> */}
                     <span className='date'>1 min ago</span>
                  </div>
               </div>
               {/* <MoreHorizIcon /> */}
            </div>
            <div className='content'>
               <p>{post.lotId.quantity}</p>
               <CardMedia
                  image={post.lotId.antiqueimgsrc}
                  alt=''
                  sx={{ height: 400 }}
               />
            </div>
            <div className='info'>
               <div className='item'>
                 <Button type='text' > View More</Button> 
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default Post
