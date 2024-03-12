import { Avatar, Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import './GuestStyle.css'



const MyProfile = () => {
    
    return (
        <div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Card sx={{ p: 5, backgroundColor: 'aliceblue',width:300,height:480, mt:5,display:'flex',gap:2,flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <Typography variant='h4' textAlign={'center'} sx={{ p: 2 }} className='dancing-script'>Edit Profile</Typography>
                    <Avatar sx={{width:150,height:150}}/>
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