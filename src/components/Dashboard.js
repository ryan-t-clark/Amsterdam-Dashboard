import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../App.css';

import axios from 'axios';

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( () => {

        async function fetchData() {
            try {
                setLoading(true);
                const url = "https://api.data.amsterdam.nl/v1/aardgasverbruik/mra_liander/"
                let result = await axios.get(url);
                setData(result.data._embedded.mra_liander)
                setLoading(false);
            } catch(e) {
                setError(true);
            }
        }
        fetchData()

    },[])

    const buildTable = () => {
        return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell align="right">Number of Connections</TableCell>
                    <TableCell align="right">From Postal Code</TableCell>
                    <TableCell align="right">To Postal Code</TableCell>
                    <TableCell align="right">Anual Consumption</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.jaar}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.jaar}
                      </TableCell>
                      <TableCell align="right">{row.aantalAansluitingen}</TableCell>
                      <TableCell align="right">{row.postcodeVanaf}</TableCell>
                      <TableCell align="right">{row.postcodeTotEnMet}</TableCell>
                      <TableCell align="right">{row.standaardJaarverbruik}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }



    if (loading) {
        return (
            <div className="container">
                <p>Loading...</p>
            </div>
        )
    } else if (error) {
        return (
            <div className="container">
                <p>Error loading data. Please reload page.</p>
            </div>
        )
    } else {
        console.log(data);
        return (
            <div className="container">
                <h2 className="center">Dashboard</h2>
    
                <a href="https://api.data.amsterdam.nl/api/">https://api.data.amsterdam.nl/api/</a>
                <p>This website provides access to all API's provided by the city of Amsterdam</p>
                {buildTable()}
            </div>    
        )
    }
    
}

export default Dashboard;