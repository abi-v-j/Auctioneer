import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: '$_id', headerName: 'ID', width: 70 },
    { field: '$dealer.Name', headerName: 'Dealer name', width: 130 },
    { field: '$lot.price', headerName: 'Art Price', width: 130 },
    {
        field: '$galleriesge',
        headerName: 'Image',
        width: 90,
    },
    { field: '$date', headerName: 'Date', width: 130 },

   
];



const DailyReport = () => {

    const [rows, setRows] = useState([])

    const fetchLot = () => {
        axios.get(`http://localhost:5000/AuctionLotListData`).then((response) => {
            console.log(response.data.auctionlist)
            setRows(response.data.auctionlist)
        })
    }

    useEffect(() => {
        fetchLot()
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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

export default DailyReport;