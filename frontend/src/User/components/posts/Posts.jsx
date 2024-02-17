import axios from "axios";
import Post from "../post/Post";
import "./posts.scss";
import { useEffect, useState } from "react";

const Posts = () => {
  const [rows, setRows] = useState([])


  const fetchLot = () => {
    axios.get('http://localhost:5000/Auctionhead').then((response) => {
       console.log(response.data.auctionhead)
       setRows(response.data.auctionhead)
    })
 }

 useEffect(() => {
  fetchLot()
}, [])

  
  return <div className="posts">
    {rows && rows.map((post,key)=>(
      <Post post={post} key={key}/>
    ))}
  </div>;
};

export default Posts;