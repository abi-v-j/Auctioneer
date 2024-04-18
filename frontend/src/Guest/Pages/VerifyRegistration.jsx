import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import './GuestStyle.css'
import { Link } from 'react-router-dom'

const VerifyRegistration = () => {
    return (
        <div>
            <Box sx={{ width: '100%', height:'100%', mt:10,display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <Card sx={{ width: 400, height: 350, mt:5, display: 'flex', alignItems: 'center',flexDirection: 'column', bgcolor:'aliceblue' }}>
                        <Typography variant='h4' textAlign={'center'} sx={{ p: 3 }} className='dancing-script'>Auctioneer</Typography>
                        <Typography>ARE YOU A </Typography>
                        <Stack
                            sx={{ mt: 2 }}
                        >   
                             <Link to={`/UserRegistration`} >
                                <Button
                                    sx={{ px: 6, mt: 1, mb: 2}}
                                    variant='outlined'
                                    type='submit'
                                >
                                    USER
                                </Button>
                            </Link>
                        </Stack>
                        <Typography >-----OR-----</Typography>
                        <Stack
                            sx={{ mt: 2 }}
                        >
                            <Link to={`/DealerRegistration`} >
                                <Button
                                    sx={{ px:5, mt: 2}}
                                    variant='outlined'
                                    type='submit'
                                    >
                                    DEALER
                                </Button>
                            </Link>
                        </Stack>
                        <Stack
                        spacing={5}
                        sx={{ mt: 3 }}
                        direction='row'
                     >
                        <Link to={`/Login`} >
                           Login ?
                        </Link>
                     </Stack>
                    </Card>
            </Box>
        </div>
    )
}

export default VerifyRegistration