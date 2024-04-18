import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
const State = () => {
   const [stateName, setStateName] = useState('')
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
                  onClick={() => deleteState(params.row._id)}
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
         stateName,

      }
      axios.post('http://localhost:5000/State', data).then((response) => {
         console.log(response.data)
         setStateName('')
         fetchState()

      })
   }

   const deleteState = (Id) => {
      axios.delete(`http://localhost:5000/deleteState/${Id}`).then((response) => {
      fetchState()
      })
   }

   const fetchState = () => {
      axios.get('http://localhost:5000/State').then((response) => {
         console.log(response.data.state)
         setRows(response.data.state)
      })
   }


   useEffect(() => {
      fetchState()
   }, [])


   return (
      <>
         <Box
            sx={{
               width: '100%',

               display: 'flex',
               justifyContent: 'center',
               marginBottom: 5
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 5, backgroundColor: 'aliceblue', height: 200 }}>
               <Typography variant='h5'>State</Typography>
               <Stack
                  spacing={5}
                  sx={{ mt: 3 }}
                  direction='row'
               >
                  <TextField
                     id='standard-basic'
                     label='State'
                     value={stateName}
                     variant='standard'
                     onChange={(event) => setStateName(event.target.value)}
                     required
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
export default State
