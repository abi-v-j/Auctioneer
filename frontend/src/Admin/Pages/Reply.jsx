import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Reply = () => {

    const [Complaint,setComplaint] = useState('')
    const {id} = useParams()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
          reply: Complaint,
  
        }
        axios.put(`http://localhost:5000/updateComplaint/${id}`, data).then((response) => {
           console.log(response.data)
          setComplaint('')

  
        })
     }
  return (
    <div>
        <Box sx={{
            width: '100%',
            height:'50vh',
            
            display: 'flex',
            justifyContent: 'center',
            
            marginTop: '5'
        }}>
            <Card sx={{ p: 5, backgroundColor: 'lightblue', height: 200 ,width:600 }} component={'form'} onSubmit={handleSubmit}>
                <Typography variant='h5'>Reply</Typography>
                <Stack
                    spacing={5}
                    sx={{ mt: 3 , alignItems:'center'}}
                    direction='row'

                    >
                    <TextField
                        id="standard-multiline-static"
                        label="Reply"
                        rows={4}
                        variant="outlined"
                        value={Complaint}
                        multiline
                        maxRows={3}
                        onChange={(event) => setComplaint(event.target.value)}
                        fullWidth
                        />
                    <Button
                        sx={{ px: 5 }}
                        variant='contained'
                        type='submit'
                    >
                        Save
                    </Button>
                </Stack>
            </Card>
        </Box>
    </div>
  )
}

export default Reply