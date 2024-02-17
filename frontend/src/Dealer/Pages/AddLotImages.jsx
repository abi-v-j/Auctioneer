import { Box, Button, Card, Stack } from '@mui/material'
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import styled from '@emotion/styled'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
 })
const AddLotImages = () => {
    const [Antique, setAntique] = useState('')
    const { Id } = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()
        const frm = new FormData()
        frm.append('lotImg', Antique)
        frm.append('lotId', Id)
  
        axios.post('http://localhost:5000/Gallery', frm).then((response) => {
           console.log(response.data)
          
           setAntique('')
        })
     }

  return (
    <Box
            sx={{
               width: '100%',
               height: '80vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
               
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue', mt: 3 }}
               >
                  <Button
                     component='label'
                     variant='contained'
                     startIcon={<CloudUploadIcon />}
                  >
                     Upload file
                     <VisuallyHiddenInput
                        type='file'
                        onChange={(event) => setAntique(event.target.files[0])}
                     />
                  </Button>
               </Stack>

               <Stack
                  spacing={3}
                  sx={{ mt: 2 }}
               >
                  <Button
                     sx={{ px: 4, mt: 10, ml: 5 }}
                     type='submit'
                     variant='outlined'
                  >
                     Submit
                  </Button>
               </Stack>
            </Card>
         </Box>
  )
}

export default AddLotImages