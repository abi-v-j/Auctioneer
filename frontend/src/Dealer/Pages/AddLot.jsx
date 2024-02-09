import { Box, Button, Card, Stack, TextField } from '@mui/material'
import React from 'react'

const AddLot = () => {
  return (
    <div>
    <Box sx={{  width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', }}>
                <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                  
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                    </Stack>
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Price" variant="standard" />
                    </Stack>
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="Antique" variant="standard" />
                    </Stack>
                    
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}> 
                        <TextField id="standard-basic" label="Quantity" variant="standard" />
                    </Stack>
                    

                    <Stack spacing={3} sx={{ mt: 2 }}>
                        <Button sx={{ px: 4, mt: 10, ml: 5 }} variant="outlined">Submit</Button>
                    </Stack>
                </Card>
            </Box>

    </div>
  )
}

export default AddLot