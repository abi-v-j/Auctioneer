import React from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 


const District = () => {
  return (
    <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>

      <Typography variant='h5'>District</Typography>
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
          <TextField id="standard-basic" label="District" variant="standard" />
          <Button sx={{ px: 5 }} variant="contained">Save</Button>

        </Stack>
      </Card>



    </Box>
  )
}

export default District