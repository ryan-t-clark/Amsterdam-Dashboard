import React from 'react';
import '../App.css';

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
                    <a href="/" className="navlink">Home</a>
                    <a href="/history" className="navlink">History</a>
                    <a href="/initiatives" className="navlink">Initiatives</a>
                    <a href="/dashboard" className="navlink">Dashboard</a>
                    <a href="/sources" className="navlink">Sources</a>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;