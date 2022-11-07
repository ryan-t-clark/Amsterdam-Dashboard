import React, { useEffect, useState } from 'react';
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
            </div>
    
        )
    }
    
}

export default Dashboard;