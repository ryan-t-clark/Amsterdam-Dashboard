import React, { useEffect, useState } from 'react';
import '../App.css';

const Dashboard = () => {

    const [data, setData] = useState(undefined);

    useEffect( () => {

    },[])

    return (
        <div className="container">
            <h2 className="center">Dashboard</h2>

            <a href="https://api.data.amsterdam.nl/api/">https://api.data.amsterdam.nl/api/</a>
            <p>This website provides access to all API's provided by the city of Amsterdam</p>
        </div>

    )
}

export default Dashboard;