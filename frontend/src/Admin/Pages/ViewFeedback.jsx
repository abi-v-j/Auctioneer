import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewFeedback = () => {

    const [rows, setRows] = useState([])
    const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }))
    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },

        {
            field: 'content',
            headerName: 'Content',
            flex: 5,
        },
           


    ]

    const fetchFeedback = () => {
        axios.get('http://localhost:5000/Feedback').then((response) => {
            console.log(response.data.feedback)
            setRows(response.data.feedback)
        })
    }

    useEffect(() => {
        fetchFeedback()
    }, [])


  return (
    <div>
        <Typography variant='h4' sx={{p:3}}>Feedbacks</Typography>
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
    </div>
  )
}

export default ViewFeedback