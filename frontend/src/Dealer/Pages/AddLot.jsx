import { Box, Button, Card, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';


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

const AddLot = () => {
   const [Name, setName] = useState('')
   const [Price, setPrice] = useState('')
   const [Antique, setAntique] = useState('')
   const [Quantity, setQuantity] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault()
      const frm = new FormData()
      frm.append('name', Name)
      frm.append('price', Price)
      frm.append('antique', Antique)
      frm.append('quantity', Quantity)

    
      axios.post('http://localhost:5000/Lot', frm).then((response) => {
         console.log(response.data)
         setName('')
         setPrice('')
         setAntique('')
         setQuantity('')
      })
   }

   return (
      <div>
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
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='Name'
                     variant='standard'
                     onChange={(event) => setName(event.target.value)}
                  />
               </Stack>
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='Price'
                     variant='standard'
                     onChange={(event) => setPrice(event.target.value)}
                  />
               </Stack>
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue', mt:3 }}
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
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='Quantity'
                     variant='standard'
                     onChange={(event) => setQuantity(event.target.value)}
                  />
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
      </div>
   )
}

export default AddLot
