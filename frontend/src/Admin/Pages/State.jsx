import React from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
const State = () => {
    return (
        <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                <Typography variant='h5'>State</Typography>


                <Stack spacing={5} sx={{ mt: 3 }} direction="row">
                    <TextField id="standard-basic" label="Place" variant="standard" />
                    <Button sx={{ px: 5 }} variant="contained">Save</Button>

                </Stack>
            </Card>



        </Box>


    )
    
}
export default State