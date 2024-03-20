import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import './GuestStyle.css'

const ChangePassword = () => {
  return (
            <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Card sx={{ p:5, backgroundColor: 'aliceblue',width:300,height:350, mt:5, display:'flex', flexDirection:'column',gap:2 }}>
                <Typography variant='h4' textAlign={'center'} sx={{ p: 2 }} className='dancing-script'>Change Password</Typography>
                <Stack>
                        <TextField id="standard-basic" label="Old Password" variant="outlined" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="New Password" variant="outlined" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Re-Enter New Password" variant="outlined" />
                    </Stack>
                    <Stack  direction='column' >
                        <Button  variant="contained">Save</Button>
                    </Stack>

                </Card>

            </Box>
  )
}

export default ChangePassword