import {
   Box,
   Button,
   Card,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   FormControl,
   TextField,
   Typography,
   Avatar,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import styled from '@emotion/styled'
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom'


const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
})

const DealerRegistration = () => {
   const [Name, setName] = useState('')
   const [Email, setEmail] = useState('')
   const [Password, setPassword] = useState('')
   const [Contact, setContact] = useState('')
   const [Photo, setPhoto] = useState('')
   const [Proof, setProof] = useState('')
   const [District, setDistrict] = useState('')
   const [Place, setPlace] = useState('')
   const [State, setState] = useState('')
   const [stateData, setStateData] = useState([])
   const [districtData, setDistrictData] = useState([])
   const [placeData, setPlaceData] = useState([])
   const [PhotoURL, setPhotoURL] = useState('') // State to store URL of the selected photo
   const [check, setCheck] = useState(false)


   const handleSubmit = (event) => {
      event.preventDefault()
      const frm = new FormData()
      frm.append('Name', Name)
      frm.append('Email', Email)
      frm.append('Password', Password)
      frm.append('Contact', Contact)
      frm.append('Proof', Proof)
      frm.append('Photo', Photo)
      frm.append('Place', Place)

      axios.post('http://localhost:5000/Dealer', frm).then((response) => {
         console.log(response.data)
         setName('')
         setEmail('')
         setPassword('')
         setContact('')
         setProof('')
         setPhoto('')
         setState('')
         setDistrict('')
         setPlace('')
      })
   }

   const fetchState = () => {
      axios.get('http://localhost:5000/State').then((response) => {
         console.log(response.data.state)
         setStateData(response.data.state)
      })
   }

   const fetchDistrict = (Id) => {
      setState(Id)
      axios.get(`http://localhost:5000/District/${Id}`).then((response) => {
         console.log(response.data.district)
         setDistrictData(response.data.district)
      })
   }

   const fetchPlace = (Id) => {
      setDistrict(Id)
      axios.get(`http://localhost:5000/Place/${Id}`).then((response) => {
         console.log(response.data.place)
         setPlaceData(response.data.place)
      })
   }

   const handlePhotoChange = (event) => {
      const file = event.target.files[0]
      setPhoto(file)
      setPhotoURL(URL.createObjectURL(file)) // Generate URL for the selected image file
   }

   const handlePassword = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword); // Always update the password state

      // Perform password pattern validation
      const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(newPassword);

      setCheck(!isValidPassword)

   }


   useEffect(() => {
      fetchState()
   }, [])

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
            <Card sx={{ p: 5, backgroundColor: 'aliceblue', width: 800 }}>
               <Typography variant='h4' textAlign={'center'} sx={{ p: 2 }} className='dancing-script'>Auctioneer</Typography>
               <Box sx={{ display: 'flex', gap: 5 }}>

                  <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <Avatar src={PhotoURL} sx={{ width: 300, height: 300 }} />
                     <Typography textAlign={'center'} sx={{ mt: 5 }} variant='h5'>{Name}</Typography>


                  </Box>
                  <Box>

                     <Stack direction={'row'} gap={4}>
                        <TextField
                           id='standard-basic'
                           label='Name'
                           variant='standard'
                           onChange={(event) => setName(event.target.value)}
                           value={Name}
                           required
                        />

                        <TextField
                           id='standard-basic'
                           label='Email'
                           variant='standard'
                           type='email'
                           onChange={(event) => setEmail(event.target.value)}
                           value={Email}
                           required

                        />
                     </Stack>
                     <Stack >
                        <Button
                           sx={{ mt: 3 }}
                           component='label'
                           variant='contained'
                           startIcon={<CloudUploadIcon />}
                        >
                           Upload Photo
                           <VisuallyHiddenInput
                              type='file'
                              onChange={handlePhotoChange}
                              required
                           />
                        </Button>
                     </Stack>
                     <Stack direction={'row'} gap={4}>
                        <TextField
                           id='standard-basic'
                           label='Contact'
                           variant='standard'
                           pattern="[7-9]{1}[0-9]{9}"
                           onChange={(event) => setContact(event.target.value)}
                           value={Contact}
                           required
                        />

                        <TextField
                           id='standard-basic'
                           label='Password'
                           variant='standard'
                           type='password'
                           onChange={(event) => setPassword(event.target.value)}
                           value={Password}
                           required
                           
                        />
                     </Stack>
                     <Stack sx={{ mt: 5 }}>
                        <Button
                           component='label'
                           variant='contained'
                           startIcon={<CloudUploadIcon />}
                        >
                           Upload Proof
                           <VisuallyHiddenInput
                              type='file'
                              onChange={(event) => setProof(event.target.files[0])}
                              required
                           />
                        </Button>
                     </Stack>

                     <Stack
                        spacing={5}
                        sx={{ mt: 3 }}
                        direction='row'
                        gap={4}
                     >
                        <FormControl
                           variant='standard'
                           fullWidth
                        >
                           <InputLabel id='demo-simple-select-standard-label'>
                              State
                           </InputLabel>
                           <Select
                              labelId='demo-simple-select-standard-label'
                              id='demo-simple-select-standard'
                              label='State'
                              onChange={(event) => fetchDistrict(event.target.value)}
                              value={State}
                              required
                           >
                              {stateData.map((state, key) => (
                                 <MenuItem
                                    key={key}
                                    value={state._id}
                                 >
                                    {state.stateName}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>

                        <FormControl
                           variant='standard'
                           fullWidth
                        >
                           <InputLabel id='demo-simple-select-standard-label'>
                              District
                           </InputLabel>
                           <Select
                              labelId='demo-simple-select-standard-label'
                              id='demo-simple-select-standard'
                              label='District'
                              onChange={(event) => fetchPlace(event.target.value)}
                              value={District}
                              required
                           >
                              {districtData.map((district, key) => (
                                 <MenuItem
                                    key={key}
                                    value={district._id}
                                 >
                                    {district.districtName}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>
                     </Stack>
                     <Stack
                        spacing={5}
                        sx={{ mt: 3 }}
                        direction='row'
                        gap={4}
                     >
                        <FormControl
                           variant='standard'
                           fullWidth
                        >
                           <InputLabel id='demo-simple-select-standard-label'>
                              Place
                           </InputLabel>
                           <Select
                              labelId='demo-simple-select-standard-label'
                              id='demo-simple-select-standard'
                              label='Place'
                              onChange={(event) => setPlace(event.target.value)}
                              value={Place}
                              required
                           >
                              {placeData.map((place, key) => (
                                 <MenuItem
                                    key={key}
                                    value={place._id}
                                 >
                                    {place.placeName}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>
                     </Stack>
                     <Stack
                        spacing={5}
                        sx={{ mt: 3 }}
                        direction='row'
                     >
                        <Button
                           sx={{ px: 5 }}
                           type='submit'
                           variant='contained'
                           fullWidth

                        >
                           Submit
                        </Button>
                     </Stack>
                     <Stack
                        spacing={5}
                        sx={{ mt: 3,ml: 19 }}
                        direction='row'
                     >
                        <Link to={`/Login`} >
                           Login ?
                        </Link>
                     </Stack>
                  </Box>
               </Box>
            </Card>
         </Box>
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={check}
            onClose={check}
            message="Password must contain at least one number, one lowercase letter, one uppercase letter, and be at least 8 characters long"
            // key={vertical + horizontal}
         />
      </div>
   )
}

export default DealerRegistration
