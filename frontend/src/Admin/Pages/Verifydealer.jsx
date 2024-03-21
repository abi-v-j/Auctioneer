import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, buttonBaseClasses } from '@mui/material';

const columns = [

    {
        field: "dealerProfile",
        headerName: "",
        width: 50,
        renderCell: (params) => {
            return (
                <>
                    <Avatar

                        className="divListDelete"
                        src={params.row.userProfile}
                    />
                </>
            );
        },
    },
    { field: 'dealerName', headerName: 'NAME', width: 200 },
    { field: 'email', headerName: 'EMAIL', width: 200 },
    { field: 'proof', headerName: 'PROOF', width: 200 },
    { field: 'place', headerName: 'PLACE', width: 200 },
    {
        field: 'action',
        headerName: 'ACTION',
        width: 200

    },

];



const Verifydealer = () => {

    const [rows, setRows] = useState([])
    const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }));

    const { id } = useParams()
    console.log(id);

    const fetchDealer = () => {
        axios.get(`http://localhost:5000/FetchDealertData`).then((response) => {
            console.log(response.data.fetchdealer)
            setRows(response.data.fetchdealer)
        })
    }

    useEffect(() => {
        fetchDealer()
    }, [])

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
                checkboxSelection />
        </div>
    );
}

export default Verifydealer;