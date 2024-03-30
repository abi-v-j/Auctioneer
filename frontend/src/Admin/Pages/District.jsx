import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'

const District = () => {
   const [stateId, setStateId] = useState('')
   const [districtName, setDistrictName] = useState('')
   const [stateData, setStateData] = useState([])

   const [rows, setRows] = useState([])
   const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }))
   const columns = [
      { field: 'id', headerName: 'ID', flex: 3 },

      {
         field: 'districtName',
         headerName: 'State',
         flex: 3,
      },
      {
         field: 'stateName',
         headerName: 'District',
         flex: 3,
         renderCell: (params) => {
            return (
              <Typography>{params.row.stateId.stateName}</Typography>
            )
         },
      },
      {
         field: 'Action',
         headerName: 'Action',

         flex: 2,
         renderCell: (params) => {
            return (
               <Button
                  variant='outlined'
                  onClick={() => deleteDistrict(params.row._id)}
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
         stateId,
         districtName,
      }
      axios.post('http://localhost:5000/District', data).then((response) => {
         console.log(response.data)
         setStateId('')
         setDistrictName('')
         fetchDistrict()

      })
   }

   const fetchState = () => {
      axios.get('http://localhost:5000/State').then((response) => {
         console.log(response.data.state)
         setStateData(response.data.state)
      })
   }

   const deleteDistrict = (Id) => {
      axios.delete(`http://localhost:5000/deleteDistrict/${Id}`).then((response) => {
         fetchDistrict()
      })
   }
   
   const fetchDistrict = () => {
      axios.get('http://localhost:5000/District').then((response) => {
         console.log(response.data.district)
         setRows(response.data.district)
      })
   }


   useEffect(() => {
      fetchState()
      fetchDistrict()
   }, [])

   return (
      <>
         <Box
            sx={{
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               marginBottom:5,
               marginTop:2
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 5, backgroundColor: 'aliceblue' }}>
               <Typography variant='h5'>District</Typography>
               <Stack
                  spacing={5}
                  sx={{ mt: 3 }}
                  direction='row'
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
                        onChange={(event) => setStateId(event.target.value)}
                        value={stateId}
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
               </Stack>

               <Stack
                  spacing={5}
                  sx={{ mt: 3 }}
                  direction='row'
               >
                  <TextField
                     id='standard-basic'
                     label='District'
                     variant='standard'
                     onChange={(event) => setDistrictName(event.target.value)}
                     value={districtName}
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

export default District
