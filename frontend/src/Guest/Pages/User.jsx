import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Contact, setContact] = useState("")
  const [Proof, setProof] = useState("")
  const [Photo, setPhoto] = useState("")
  const [District, setDistrict] = useState("")
  const [Place, setPlace] = useState("")

const handleSubmit = (event) => {
  event.preventDefault()
  const data = {
    Name,
    Email,
    Password,
    Contact,
    Proof,
    Photo,
    District,
    Place,
  }
  axios.post('http://localhost:5000/User', data).then((response) => {
         console.log(response.data)
         setName('')
         setEmail('')
         setPassword('')
         setContact('')
         setProof('')
         setPhoto('')
         setDistrict('')
         setPlace('')
      })
}

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
component={'form'}
onSubmit={handleSubmit}

      >
        <Card sx={{ p: 5, backgroundColor: 'lightblue', width: '20vw' }}>
          <Typography>User Registration</Typography>
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)} />
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Photo" variant="standard" onChange={(event) => setPhoto(event.target.value)}/>
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Contact" variant="standard"onChange={(event) => setContact(event.target.value)} />
          </Stack>
          
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Password" variant="standard" onChange={(event) => setPassword(event.target.value)} />
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="Proof" variant="standard" onChange={(event) => setProof(event.target.value)}/>
          </Stack>

          <Stack spacing={5} sx={{ mt: 3 }} direction="row">
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-standard-label">
                District
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="District"
                onChange={(event) => setDistrict(event.target.value)}
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
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-standard-label">
                Place
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Place"
                onChange={(event) => setPlace(event.target.value)}
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
            <Button sx={{ px: 5 }} type ='submit'  variant="contained" fullWidth>
              Submit
            </Button>
          </Stack>
        </Card>
      </Box>
    </div>
  )
}

export default Registration
