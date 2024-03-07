import { Avatar, Box, Button, Card, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'



import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';


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


const AddLot = () => {
   const [Name, setName] = useState('')
   const [Price, setPrice] = useState('')
   const [Antique, setAntique] = useState('')
   const [rows, setRows] = useState([])

   const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }))
   const columns = [
      { field: '_id', headerName: 'ID', flex: 3 },
      {
         field: 'antiqueimgsrc',
         headerName: 'Photo',
         flex: 3,
         renderCell: (params) => {
            console.log(params)
            return (
               <>
                  <Avatar
                     src={params.row.antiqueimgsrc}
                     // onClick={() => deleteData(params.row.ward_id)}
                  />
               </>
            )
         },
      },
      {
         field: 'name',
         headerName: 'Name',
         flex: 3,
      },
      
      {
         field: 'Action',
         headerName: 'Action',

         flex: 4,
         renderCell: (params) => {
            return (
               <Box sx={{ display: 'flex', gap: 3 }}>
                  <Link variant='outlined' to={`/Dealer/AddImage/${params.row._id}`}>Add Image</Link>
                  <Button variant='outlined'>Reject</Button>
               </Box>
            )
         },
      },
   ]

   const fetchLot = () => {
      axios.get('http://localhost:5000/Lot').then((response) => {
         console.log(response.data.lot)
         setRows(response.data.lot)
      })
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      const frm = new FormData()
      frm.append('name', Name)
      frm.append('price', Price)
      frm.append('dealerId', sessionStorage.getItem('dId'))

      axios.post('http://localhost:5000/Lot', frm).then((response) => {
         console.log(response.data)
         setName('')
         setPrice('')
      })
   }
   useEffect(() => {
      fetchLot()
   }, [])
   return (
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
         <Box
            sx={{
               width: '100%',
               height: '80vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
            component={'form'}
            onSubmit={handleSubmit}
         >
            <Card sx={{ p: 5, backgroundColor: 'lightblue',width:400 }}>
               
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='Name'
                     variant='standard'
                     onChange={(event) => setName(event.target.value)}
                  />
               </Stack>
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue' }}
               >
                  <TextField
                     id='standard-basic'
                     label='Price'
                     variant='standard'
                     type='number'
                     onChange={(event) => setPrice(event.target.value)}
                  />
               </Stack>
               <Stack
                  spacing={3}
                  sx={{ backgroundColor: 'lightblue', mt:3 }}
               >
                 
                  <Button
                     component='label'
                     variant='contained'
                     startIcon={<CloudUploadIcon />}
                  >
                     Upload file
                     <VisuallyHiddenInput
                        type='file'
                        onChange={(event) => setAntique(event.target.files[0])}
                     />
                  </Button>
               </Stack>

             

               <Stack
                  spacing={3}
                  sx={{ mt: 2 }}
               >
                  <Button
                     sx={{ px: 4, mt: 10, ml: 5 }}
                     type='submit'
                     variant='outlined'
                  >
                     Submit
                  </Button>
               </Stack>
            </Card>
         </Box>
         <Box sx={{ height: 400, width: '80%' }}>
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
               checkboxSelection
               disableRowSelectionOnClick
            />
         </Box>
      </Box>
   )
}

export default AddLot


