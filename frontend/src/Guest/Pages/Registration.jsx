import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
    return (
        <div>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Card sx={{ p: 5, backgroundColor: 'lightblue' ,width:'20vw'}}>
                    <Typography>User Registration</Typography>
                    <Stack sx={{ mt: 1 }}> 
                        <TextField id="standard-basic" label="Name" variant="standard" />
                    </Stack>
                    <Stack sx={{ mt: 1 }}> 
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </Stack>
                    <Stack sx={{ mt: 1 }}>
                        <TextField id="standard-basic" label="Photo" variant="standard" />
                    </Stack>
                    <Stack sx={{ mt: 1 }}>
                        <TextField id="standard-basic" label="Contact" variant="standard" />
                    </Stack>
                    <Stack sx={{ mt: 1 }}> 
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Stack>
                    <Stack sx={{ mt: 1 }}>
                        <TextField id="standard-basic" label="Proof" variant="standard" />
                    </Stack>


                    <Stack spacing={5} sx={{ mt: 3 }} direction="row">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Place</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"

                                label="Place"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Idukki</MenuItem>
                                <MenuItem value={20}>Kottayam</MenuItem>
                                <MenuItem value={30}>Kollam</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack spacing={5} sx={{ mt: 3 }} direction="row">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"

                                label="Location"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Idukki</MenuItem>
                                <MenuItem value={20}>Kottayam</MenuItem>
                                <MenuItem value={30}>Kollam</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack spacing={5} sx={{ mt: 3 }} direction='row'>
                        <Button sx={{ px: 5 }} variant="contained" fullWidth>Save</Button>

                    </Stack>

                </Card>
            </Box>
        </div>
    )
}

export default Registration