import React, { useState } from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'

const Complaint = () => {
    const Uid = sessionStorage.getItem('uId')

    const [Complaint,setComplaint] = useState('')
    const [rows, setRows] = useState([])
   const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }))
   const columns = [
      { field: 'id', headerName: 'ID', flex: 3 },

      {
         field: 'stateName',
         headerName: 'Name',
         flex: 3,
      },
      {
         field: 'Action',
         headerName: 'Action',

         flex: 2,
         renderCell: (params) => {
            return (
               <Button
                  variant='outlined'
                  onClick={() => deleteComplaint(params.row._id)}
               >
                  Delete
               </Button>
            )
         },
      },


   ]

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
          content: Complaint,
          userId:Uid
  
        }
        axios.post('http://localhost:5000/Complaint', data).then((response) => {
           console.log(response.data)
          setComplaint('')

  
        })
     }
     const fetchComplaint = () => {
        axios.get(`http://localhost:5000/Complaint/${Uid}`).then((response) => {
           console.log(response.data.complaint)
           setRows(response.data.complaint)
        })
     }
     
   const deleteComplaint = (Id) => {
    axios.delete(`http://localhost:5000/deleteComplaint/${Id}`).then((response) => {
    fetchComplaint()
    })
 }

  
    return (
        <>
        <Box sx={{
            width: '100%',
            
            display: 'flex',
            justifyContent: 'center',
            
            marginTop: '5'
        }}>
            <Card sx={{ p: 5, backgroundColor: 'lightblue', height: 100 }} component={'form'} onSubmit={handleSubmit}>
                <Typography variant='h5'>Complaint</Typography>
                <Stack
                    spacing={5}
                    sx={{ mt: 3 }}
                    direction='row'
                    >
                    <TextField
                        id="standard-multiline-static"
                        label="complaint"
                        rows={4}
                        variant="standard"
                        value={Complaint}
                        onChange={(event) => setComplaint(event.target.value)}
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

        <Box sx={{ height: 370, width: '100%' }}>
        <DataGrid
           rows={rowsWithId}
           columns={columns}
           initialState={{
               pagination: {
                   paginationModel: {
                       pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            />
     </Box>
            </>
    )
}

export default Complaint