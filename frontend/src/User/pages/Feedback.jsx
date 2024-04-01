import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Feedback = () => {

    const Uid = sessionStorage.getItem('uId')

    const [Feedback, setFeedback] = useState('')
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
                    <Button
                        variant='outlined'
                        onClick={() => deleteFeedback(params.row._id)}
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
            content: Feedback,
            userId: Uid

        }
        axios.post('http://localhost:5000/Feedback', data).then((response) => {
            console.log(response.data)
            setFeedback('')
            fetchFeedback()


        })
    }
    const fetchFeedback = () => {
        axios.get(`http://localhost:5000/Feedback/${Uid}`).then((response) => {
            console.log(response.data.feedback)
            setRows(response.data.feedback)
        })
    }

    const deleteFeedback = (Id) => {
        axios.delete(`http://localhost:5000/Feedback/${Id}`).then((response) => {
            fetchFeedback()
        })
    }


    useEffect(() => {
        fetchFeedback()
    }, [])



    return (
        <>
            <Box sx={{
                width: '100%',
                height: '50vh',

                display: 'flex',
                justifyContent: 'center',

                marginTop: 5
            }}>
                <Card sx={{ p: 5, backgroundColor: 'lightblue', height: 200, width: 600 }} component={'form'} >

                    <Typography variant='h5'>Feedback</Typography>
                    <Stack
                        spacing={5}
                        sx={{ mt: 3, alignItems: 'center' }}
                        direction='row'

                    >
                        <TextField
                            id="standard-multiline-static"
                            label="Feedback"
                            rows={4}
                            variant="outlined"
                            value={Feedback}
                            onChange={(event) => setFeedback(event.target.value)}
                            multiline
                            maxRows={3}
                            fullWidth
                        />
                        <Button
                            sx={{ px: 5 }}
                            variant='contained'
                            type='submit'
                            onClick={handleSubmit}
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

export default Feedback