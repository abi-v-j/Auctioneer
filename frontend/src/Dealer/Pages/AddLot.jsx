import { Box, Button, Card, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'


const AddLot = () => {
  const [Name, setName] = useState("")
  const [Price, setPrice] = useState("")
  const [Antique, setAntique] = useState("")
  const [Quantity, setQuantity] = useState("")


  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
        Name,
        Price,
        Antique,
        Quantity
       
    }
    axios.post('http://localhost:5000/AddLot', data).then((response) => {
        console.log(response.data)
        setName('')
        setPrice('')
        setAntique('')
        setQuantity('')
       
    })
}

  return (
    <div>
    <Box sx={{  width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', }}
            component={'form'}
            onSubmit={handleSubmit}
            >
                <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                  
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Name" variant="standard" 
                         onChange={(event) => setName(event.target.value)} />
                    </Stack>
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Price" variant="standard" 
                         onChange={(event) => setPrice(event.target.value)} />
                    </Stack>
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Antique" variant="standard" 
                         onChange={(event) => setAntique(event.target.value)} />
                    </Stack>
                    
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}> 
                        <TextField id="standard-basic" label="Quantity" variant="standard" 
                         onChange={(event) => setQuantity(event.target.value)} />
                    </Stack>
                    

                    <Stack spacing={3} sx={{ mt: 2 }}>
                        <Button sx={{ px: 4, mt: 10, ml: 5 }} type='submit' variant="outlined">Submit</Button>
                    </Stack>
                </Card>
            </Box>

    </div>
  )
}

export default AddLot