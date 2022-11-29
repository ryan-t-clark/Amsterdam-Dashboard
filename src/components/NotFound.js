import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <h2>Page not found</h2>
            <Link to="/">Return to Home page</Link>
        </div>
    )
}

export default NotFound;