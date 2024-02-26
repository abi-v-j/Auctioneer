import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { setSocket } from '../../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Auction = () => {
   const { socket } = useContext(setSocket)
   const uid = sessionStorage.getItem('uId')
   const navigate = useNavigate()

   const [rows, setRows] = useState(null)
   const [rowLot, setRowLot] = useState(null)
   const [count, setCount] = useState(10)
   const [pricedata, setPricedata] = useState(0)
   const fetchLot = () => {
      axios
         .get('http://localhost:5000/AuctionheadCurrentDate')
         .then((response) => {
            setRowLot(response.data.auctionhead)

         })
   }

   const fetchSingleLot = () => {
      axios
         .get('http://localhost:5000/SingleAuctionheadCurrentDate')
         .then((response) => {
            const data = response.data.auctionhead
            console.log(data);
            if(data === null)
            {
               alert("Auction Ended Next Auction comming soon......")
               navigate("/User")
            }
            else{

               setRows(response.data.auctionhead)
               setPricedata(data.lotId.price)
            }

         })
   }

   const countDown = (price, Id) => {
      socket.emit("smallCountDownFromClient", { price, Id, uid })
   }

   useEffect(() => {
      fetchSingleLot()
      fetchLot()
   }, [])


   useEffect(() => {
      socket.on("smallCountDownFromServer", ({ count, pricedata }) => {
         setCount(count)
        
         if (count === 0) {
            fetchSingleLot()
            fetchLot()

         }
         setPricedata(pricedata)
      })
   }, [socket])
   return (

      <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', }}>
         <Box sx={{ width: '60%', m: 2, }}>
            {
               rows && (<Card sx={{ height: '40vh', backgroundColor: 'red' }}>
                  <CardMedia
                     image={rows && rows.lotId.productimgsrc}
                     sx={{ width: 200, height: 200 }}
                  />
                  <Typography>{rows && rows.lotId.name}</Typography>
               </Card>)
            }

            <Card
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  left: '55vw',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: 'lightblue',
                  alignItems: 'center',
               }}
            >
               <Typography variant='h5'>{count}</Typography>
            </Card>
            <Card
               sx={{
                  height: '50vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <Stack direction={'column'} gap={3}>
                  <Box>
                     <Typography>Current Price : {pricedata}</Typography>
                  </Box>
                  <Box>
                     <Button
                        variant='contained'
                        onClick={() => countDown(50, rows._id)}
                     >
                        +50
                     </Button>
                     <Button
                        variant='contained'
                        onClick={() => countDown(100, rows._id)}
                     >
                        +100
                     </Button>
                     <Button
                        variant='contained'
                        onClick={() => countDown(200, rows._id)}
                     >
                        +200
                     </Button>
                  </Box>
               </Stack>
            </Card>
         </Box>
         <Box sx={{ width: '40%' }}>
            <Card>
               {
                  rowLot && rowLot.map((lotdata, key) => (
                     <Typography key={key}>{lotdata.lotId.name}</Typography>
                  ))
               }
            </Card>
         </Box>
      </Box>
   )
}

export default Auction
