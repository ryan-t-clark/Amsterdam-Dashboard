import React from 'react';
import '../App.css';

import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    
    return (
        <AppBar style={{ background: '#393b3d' }}>
                <Typography variant="h4" padding="10px" align="center">
                        The Smart City of Amsterdam
                </Typography>
                
                <Toolbar sx={{ justifyContent: "center" }}>
                    <div className="nav">
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                background: isActive ? '#7600dc' : '#f0f0f0',
                            })}>Home 
                        </NavLink>
                        <NavLink
                            to="/history"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                background: isActive ? '#7600dc' : '#f0f0f0',
                            })}>History
                        </NavLink>
                        <NavLink
                            to="/initiatives"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                background: isActive ? '#7600dc' : '#f0f0f0',
                            })}>Initiatives
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                background: isActive ? '#7600dc' : '#f0f0f0',
                            })}>Dashboard
                        </NavLink>
                        <NavLink
                            to="/sources"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#545e6f',
                                background: isActive ? '#7600dc' : '#f0f0f0',
                            })}>Sources
                        </NavLink>
                    </div>
                </Toolbar>
        </AppBar>
    )
}

export default Navbar;