import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    
    return (
        <AppBar style={{ background: '#393b3d' }}>
                <Toolbar>
                    <Typography variant="h4" padding="10px">
                        Amsterdam
                    </Typography>
                    <Link to="/" className="navlink">Home</Link>
                    <Link to="/history" className="navlink">History</Link>
                    <Link to="/initiatives" className="navlink">Initiatives</Link>
                    <Link to="/dashboard" className="navlink">Dashboard</Link>
                    <Link to="/sources" className="navlink">Sources</Link>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;