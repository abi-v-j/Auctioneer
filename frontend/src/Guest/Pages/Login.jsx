import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './GuestStyle.css'
const Login = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleSubmit = (event) => {
      event.preventDefault()
      const data = {
         email,
         password,
      }
      axios.post('http://localhost:5000/Login', data).then((response) => {
         const data = response.data
         if (data.login === 'admin') {
            sessionStorage.setItem('aId', data.id)
            navigate('../../Admin')
         } else if (data.login === 'user') {
            sessionStorage.setItem('uId', data.id)
            navigate('../../User')
         } else if (data.login === 'dealer') {
            sessionStorage.setItem('dId', data.id)
            navigate('../../Dealer')
         }
      }).catch((error)=> {
         alert(error.response.data.error);
      })
   }
   return (
      <div>
         <Box
            sx={{
               width: '100%',
               height: '85vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            backgroundImage: 'url("download.jpeg ")', // Add your image path here
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 10, backgroundColor: 'aliceblue' }}>
               <Typography variant='h4' textAlign={'center'} sx={{ p: 2 }} className='dancing-script'>Auctioneer</Typography>
               <TextField
                  id='standard-basic'
                  label='Email'
                  variant='standard'
                  required
                  onChange={(event) => setEmail(event.target.value)}
               />

               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'aliceblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='password'
                     variant='standard'
                     type='password'
                     required
                     onChange={(event) => setPassword(event.target.value)}

                    
                  />
               </Stack>

               <Stack
                  spacing={3}
                  sx={{ mt: 2 }}
               >
                  <Button
                     sx={{ px: 4, mt: 10, ml: 5 }}
                     variant='outlined'
                     type='submit'
                  >
                     Login
                  </Button>
               </Stack>
               <Stack
                  spacing={3}
                  sx={{ mt: 1,display:'flex', alignItems: 'center' }}
               >
                  <Link to={`/VerifyRegistration`} >
                     New Account?
                  </Link>
               </Stack>
            </Card>
         </Box>
      </div>
   )
}

export default Login
