import React, { useEffect, useState } from 'react'
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
         field: 'content',
         headerName: 'Content',
         flex: 3,
      },
      {
         field: 'reply',
         headerName: 'Reply',
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
    axios.delete(`http://localhost:5000/Complaint/${Id}`).then((response) => {
    fetchComplaint()
    })
 }


 useEffect(() => {
   fetchComplaint()
 },[])
  
    return (
        <>
        <Box sx={{
            width: '100%',
            height:'50vh',
            
            display: 'flex',
            justifyContent: 'center',
            
            marginTop: 5
        }}>
            <Card sx={{ p: 5, backgroundColor: 'aliceblue', height: 300 ,width:600 }} component={'form'} onSubmit={handleSubmit}>
                <Typography variant='h5'>Complaint</Typography>
                <Stack
                    spacing={5}
                    sx={{ mt: 3 , alignItems:'center'}}
                    direction='row'

                    >
                    <TextField
                        id="standard-multiline-static"
                        label="complaint"
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