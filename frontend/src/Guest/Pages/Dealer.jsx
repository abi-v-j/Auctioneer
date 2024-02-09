import { Box, Button, Card, InputLabel, MenuItem, Select, Stack, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'

const CheckerRegistration = () => {
    return (
        <div>
            <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                    <Typography>CheckerRegistration</Typography>
                    <Stack>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Photo" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Contact" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Proof" variant="standard" />
                    </Stack>


                    <Stack spacing={5} sx={{ mt: 3 }} direction="row">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">District</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"

                                label="District"
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
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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

                    <Stack spacing={5} sx={{mt:3}}direction='row'>
                        <Button sx={{ px: 5 }} variant="contained">Save</Button>

                    </Stack>

                </Card>
            </Box>
        </div>
    )
}

export default CheckerRegistration