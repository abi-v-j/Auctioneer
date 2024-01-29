import { Box, Button, Card, Stack, TextField } from '@mui/material'
import React from 'react';
const Login = () => {
    return (
        <div>

            <Box sx={{ width: "100%", height:"85vh",display:"flex",alignItems:'center',justifyContent:'center' }}>
                <Card sx={{ p: 10, backgroundColor: 'lightblue' }}>
                    <TextField id="standard-basic" label="User name" variant="standard" />
                    <Stack spacing={3} sx={{ backgroundColor: "lightblue" }}>
                        <TextField id="standard-basic" label="password" variant="standard" />
                    </Stack>
                    <Stack spacing={3}sx={{mt:2}}>
                    <Button sx={{ px: 4,mt: 10, ml: 5 }} variant="outlined">Submit</Button>
                    </Stack>
                </Card>
            </Box>
        </div >
    )
}

export default Login