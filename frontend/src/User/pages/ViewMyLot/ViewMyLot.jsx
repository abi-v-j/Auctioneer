import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ViewMyLot = () => {
  return (
    <Box >
        <Card sx={{height:150,backgroundColor:'lightBlue',display:'flex'}}>
            <CardMedia sx={{height:150,width:150}}>
                
            </CardMedia>
            <Box>
            <Typography>
                Name
            </Typography>
            <Typography>
                Details
            </Typography>
           </Box>
        </Card>
        <Card sx={{height:150}}>
            car
        </Card>
        <Card sx={{height:150}}>
            car
        </Card>
        <Card sx={{height:150}}>
            car
        </Card>
    </Box>
  )
}

export default ViewMyLot