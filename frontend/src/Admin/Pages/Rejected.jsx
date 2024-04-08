import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Button} from '@mui/material';




const Rejected = () => {

    const [rows, setRows] = useState([])
    const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }));

    const { id } = useParams()
    console.log(id);

    const fetchDealer = () => {
        axios.get(`http://localhost:5000/FetchDealerVerifyReject`).then((response) => {
            console.log(response.data.fetchdealer)
            setRows(response.data.fetchdealer)
        })
    }


    const acceptLot = (Id) => {
        axios.put(`http://localhost:5000/acceptDealer/${Id}`).then((response) => {
           console.log(response.data) 
           fetchDealer()

        })
     }


   

    useEffect(() => {
        fetchDealer()
    }, [])


    const columns = [

        {
            field: "proofimgsrc",
            headerName: "Proof",
           flex:2,
            renderCell: (params) => {
                return (
                    <>
                        <Avatar
    
                            className="divListDelete"
                            src={params.row.proofimgsrc}
                        />
                    </>
                );
            },
        },
        {
            field: "profileimgsrc",
            headerName: "Profile",
            flex:2,
            renderCell: (params) => {
                return (
                    <>
                        <Avatar
    
                            className="divListDelete"
                            src={params.row.profileimgsrc}
                        />
                    </>
                );
            },
        },
        { field: 'Name', headerName: 'NAME',  flex:3, },
        { field: 'Email', headerName: 'EMAIL',  flex:3, },
        { field: 'Contact', headerName: 'PLACE',  flex:3, },
        {
            field: 'Action',
            headerName: 'Action',
    
            flex: 4,
            renderCell: (params) => {
               return (
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    
                     <Button
                        variant='outlined'
                        onClick={() => acceptLot(params.row._id)}
                     >
                        Accept
                     </Button>

                    
                  </Box>
               )
            },
         },
    
    ];
    

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rowsWithId}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                />
        </div>
    );
}

export default Rejected;