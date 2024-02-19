import { Box } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const LotView = () => {
  return (
   <Box>
     <Carousel style={{height:300}}>
                <div>
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=sph"  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=sph" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=sph" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
   </Box>
  )
}

export default LotView