import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../App.css';

import Spinner from 'react-spinkit';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const GasTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(2);

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

    },[]);

    async function getMore() {
        try {
            const url = `https://api.data.amsterdam.nl/v1/aardgasverbruik/mra_liander/?page=${page}`
            let result = await axios.get(url);
            let newData = data.concat(result.data._embedded.mra_liander);
            setPage(page + 1);
            setData(newData);
        } catch (e) {
            setError(true);
        }
    }

    function showLess() {
        if (page > 2) {
            setPage(page - 1);
            let newData = data.slice(0,(page-1)*(20));
            setData(newData);
        }
    }

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
                      key={uuid()}
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
                <Spinner name="wandering-cubes" style={{ width: 100, height: 100 }} />
            </div>
        )
    } else if (error) {
        return (
            <div className="container">
                <p>Error loading data. Please reload page.</p>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>Data for this table is retrieved from Amsterdam's official data API.</p>
                <a href="https://api.data.amsterdam.nl/api/">https://api.data.amsterdam.nl/api/</a>
                <h3>Natural Gas Consumption</h3>
                {buildTable()}
                <span>
                    <button onClick={getMore}>Get More Data</button>
                    <button onClick={showLess}>Show Less Data</button>
                </span>
                <p>Now showing {(page-1)*(20)} elements</p>
            </div>    
        )
    }

}

export default GasTable;