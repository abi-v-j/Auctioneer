import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const MyProfile = () => {
    return (
        <div>
            <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                    <Typography>My Profile</Typography>
                    <Card spacing={5} sx={{ borderRadius: '100%', height: '17vh', width: '170' }}>
                        <Stack alignItems={'center'}>
                            <h1 >PHOTO</h1>
                        </Stack>
                    </Card>
                    <Stack>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Contact" variant="standard" />
                    </Stack>
                    <Stack spacing={5} sx={{ mt: 3 }} direction='row'>
                        <Button sx={{ px: 5 }} variant="contained" fullWidth>Save</Button>
                    </Stack>

                </Card>
            </Box>
        </div >
    )
}

export default MyProfile