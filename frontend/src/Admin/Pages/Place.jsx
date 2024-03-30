import React, { useEffect, useState } from 'react'
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
} from '@mui/material'
import { Typography } from '@mui/material'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'

const Place = () => {
   const [stateId, setStateId] = useState('')
   const [districtId, setDistrictId] = useState('')
   const [placeName, setPlaceName] = useState('')
   const [stateData, setStateData] = useState([])
   const [districtData, setDistrictData] = useState([])

   const [rows, setRows] = useState([])
   const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }))
   const columns = [
      { field: 'id', headerName: 'ID', flex: 3 },

      {
         field: 'placeName',
         headerName: 'State',
         flex: 3,
      },
      {
         field: 'stateName',
         headerName: 'District',
         flex: 3,
         renderCell: (params) => {
            return (
               <Typography>{params.row.districtId.districtName}</Typography>
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
                  onClick={() => deletePlace(params.row._id)}
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
         districtId,
         placeName
      }
      axios.post('http://localhost:5000/Place', data).then((response) => {
         console.log(response.data)
         setStateId('')
         setDistrictId('')
         setPlaceName('')
      })
   }

   const fetchState = () => {
      axios.get('http://localhost:5000/State').then((response) => {
         console.log(response.data.state)
         setStateData(response.data.state)
      })
   }

   const deletePlace = (Id) => {
      axios.delete(`http://localhost:5000/deletePlace/${Id}`).then((response) => {
         fetchPlace()
      })
   }

   const fetchDistrict = (Id) => {
      setStateId(Id)
      axios.get(`http://localhost:5000/District/${Id}`).then((response) => {
         console.log(response.data.district)
         setDistrictData(response.data.district)
      })
   }


   const fetchPlace = () => {
      axios.get('http://localhost:5000/Place').then((response) => {
         console.log(response.data.place)
         setRows(response.data.place)
      })
   }


   useEffect(() => {
      fetchState()
      fetchPlace()
   }, [])
   return (
      <>
         <Box
            sx={{
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               marginBottom:5
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 5, backgroundColor: 'lightblue' }}>
               <Typography variant='h5'>Place</Typography>
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
                        onChange={(event) => fetchDistrict(event.target.value)}
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
                        onChange={(event) => setDistrictId(event.target.value)}
                        value={districtId}
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
               >
                  <TextField
                     id='standard-basic'
                     label='Place'
                     variant='standard'
                     onChange={(event) => setPlaceName(event.target.value)}
                     value={placeName}

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

export default Place
