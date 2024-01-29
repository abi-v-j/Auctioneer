import React from 'react'
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Typography } from '@mui/material';

const Place = () => {
    return (
        <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
                <Typography variant='h5'>Place</Typography>
                <Stack spacing={5} sx={{ mt: 3 }} direction="row">

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="State"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Kerala</MenuItem>
                            <MenuItem value={20}>Karnataka</MenuItem>
                            <MenuItem value={30}>Goa</MenuItem>
                        </Select>
                    </FormControl>
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
                    <TextField id="standard-basic" label="Place" variant="standard" />
                    <Button sx={{ px: 5 }} variant="contained">Save</Button>
                </Stack>
            </Card>
        </Box>
    );
   
}

export default Place