import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
// import Share from "../../components/share/Share"
import "./home.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Typography } from "@mui/material"

const Home = () => {
  const [rows, setRows] = useState(null)

  const fetchLot = () => {
     axios
        .get('http://localhost:5000/AuctionheadCurrentDate')
        .then((response) => {
           console.log(response.data.auctionhead)
           setRows(response.data.auctionhead)
        })
  }

  useEffect(() => {
     fetchLot()
  }, [])
  return (
    <div className="home">
      {
        rows &&  <Stories rows={rows}/>

      }
            <Card className="innerCard" sx={{p:5,m:3,textAlign:'center'}}><Typography variant="h4">Auction Start in </Typography></Card>

      {/* <Share/> */}
      <Card className="innerCard" sx={{p:5,m:3,textAlign:'center'}}><Typography variant="h4">Upcoming Auction</Typography></Card>
      <Posts/>
    </div>
  )
}

export default Home