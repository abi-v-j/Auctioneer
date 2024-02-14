import { Box, Button, Card, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
         sessionStorage.setItem('Id', data.id)
         if (data.login === 'admin') {
            navigate('../../Admin')
         } else if (data.login === 'user') {
            navigate('../../User')
         } else if (data.login === 'dealer') {
            navigate('../../Dealer')
         }
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
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 10, backgroundColor: 'lightblue' }}>
               <TextField
                  id='standard-basic'
                  label='User name'
                  variant='standard'
                  onChange={(event) => setEmail(event.target.value)}
               />

               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='password'
                     variant='standard'
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
                     Submit
                  </Button>
               </Stack>
            </Card>
         </Box>
      </div>
   )
}

export default Login
