import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewComplaint = () => {

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
            field: 'Action',
            headerName: 'Action',

            flex: 2,
            renderCell: (params) => {
                return (
                    <Link to={`/Admin/Reply/${params.row._id}`}>
                        <Button
                            variant='outlined'
                        >
                            Reply
                        </Button>
                    </Link>
                )
            },
        },


    ]

    const fetchComplaint = () => {
        axios.get(`http://localhost:5000/Complaint/`).then((response) => {
            console.log(response.data.complaint)
            setRows(response.data.complaint)
        })
    }

    useEffect(() => {
        fetchComplaint()
    }, [])

    return (
        <div>
            <Typography variant='h4' sx={{p:3}}>Complaints</Typography>
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

export default ViewComplaint