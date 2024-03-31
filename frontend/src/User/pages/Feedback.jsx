import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Feedback = () => {
    return (
        <>
            <Box sx={{
                width: '100%',

                display: 'flex',
                justifyContent: 'center',

                marginTop: '5'
            }}>
                <Card sx={{ p: 5, backgroundColor: 'lightblue', height: 100 }} >
                
                    <Typography variant='h5'>Feedback</Typography>
                    <Stack
                        spacing={5}
                        sx={{ mt: 3 }}
                        direction='row'
                    >
                        <TextField
                            id="standard-multiline-static"
                            label="Feedback"
                            rows={4}
                            variant="standard"
                           // value={Complaint}
                            //onChange={(event) => setComplaint(event.target.value)}
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
        </>



    )
}

export default Feedback