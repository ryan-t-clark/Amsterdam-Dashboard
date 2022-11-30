import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material'

import amsterdam_image_one from '../static/amsterdam_images/amsterdam_image_one.jpg';
import amsterdam_image_five from '../static/amsterdam_images/amsterdam_image_five.jpg';
import amsterdam_image_six from '../static/amsterdam_images/amsterdam_image_six.jpg';

const Initiatives = () => {
    return (
        <div className="container">
            <h2 className="center">City Initiatives</h2>
            <p>
                There are countless initiatives led by the city which cover a broad spectrum of topics and 
                and focus. Below are just a few of the major projects currently being carried out in the city.
            </p>

            <Grid container spacing={2}>
                <Grid item xs={8} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>The Amsterdam Smart City Initiative (ASC)</h3>
                        <p>
                            As the title describes, the ASC is the main program that aims to fund and facilitate the
                            implementation of smart city projects. They have led over 80 projects to the market,
                            focusing on the use of data to improve the wellbeing of citizens.
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} justifyContent="center" direction="row" alignItems="center">
                    <Card>
                        <CardContent>
                            <CardMedia 
                                    component="img"
                                    height="200"
                                    image={amsterdam_image_five}
                                />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>Publicly Available Data API</h3>
                        <p>
                            Amsterdam provides a publicly available <a href="https://api.data.amsterdam.nl/api/">
                            RESTful API (external link)</a> that contains data on numerous statistics collected by the city. A majority of this data requires
                            no additional authorization and can be used by anyone who wishes to use it. We utilized some of
                            this data on our <Link to="/dashboard">dashboard page.</Link>
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>Startup-Focused Initiatives</h3>
                        <p>
                            Since the Smart City initiatives began, there has been a large focus on cultivating the 
                            growth of startups in Amsterdam. The city itself heavily promotes startups and invites 
                            innovation. There are countless programs that encourage young people to chase their ideas,
                            and provide a support structure to do so. This support structure includes emphasis and the 
                            availability of value, diversity, capital procurement, networking, and growth.
                        </p>
                        <a href="https://www.iamsterdam.com/en/business/startupamsterdam/startup-guide/initiatives">
                            More information (external link)
                        </a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} justifyContent="center" direction="row" alignItems="center">
                    <Card>
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_six}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>The Amsterdam Economic Board</h3>
                        <p>
                            The Amsterdam Economic Board is an organization that helps businesses in Amsterdam network
                            to find other companies with similar interests. They facilitate collaboration on projects
                            that advance the city, and emphasize that they help establish connections that otherwise
                            wouldn't be possible. 
                        </p>
                        <a href="https://amsterdameconomicboard.com/en/">
                            More information (external link)
                        </a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>The City's Sensor Network</h3>
                        <p>
                            One of the main attributes of a Smart City is its use of data and that data's public 
                            availability. A big part of this is transparency. For Amsterdam, this comes through their
                            publicly available registry of sensors throughout the city. It is now a legal requirement
                            for companies to report where their sensors are and what they are collecting. Much of the
                            data collected on these sensors is available to the public.        
                        </p>
                        <a href="https://cities-today.com/amsterdam-introduces-mandatory-register-for-sensors/">
                            More information (external link)
                        </a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>My Neighbor App</h3>
                        <p>
                            One example of a crowd-sourced smart city project is MjinBurr, which translates to the 
                            My Neighbor App, which is an App in the Amsterdam that connects communities. Its goal is to
                            allow neighbors to work through issues together without the need for involving local 
                            government or police. Its meant to save time and money for everyone involved by settling 
                            local disputes without escalation. It also serves as a community marketplace and forum, where
                            neighbors are free to discuss anything and everything.
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                        <h3>Public Eye</h3>
                        <p>
                            One major project that has recieved a lot of media attention is the city's "Public Eye"
                            program. The Public Eye is a crowd monitoring technology that uses local camera infrastructure
                            to keep track of how crowded particular areas are at any given time. This project grew from the
                            Crowd Monitoring System Amsterdam (CMSA), which was a smaller scale implementation of the
                            existing system. One major point of emphasis is that it is open source to ensure that the
                            privacy of the public is maintained as much as possible.
                        </p>
                        <a href="https://www.amsterdam.nl/innovation/mobility/public-eye/">
                            Source One (external link)
                        </a> <br/>
                        <a href="https://cities-today.com/why-the-city-of-amsterdam-developed-its-own-crowd-monitoring-technology/">
                            Source Two (external link)
                        </a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} justifyContent="center" direction="row" alignItems="center">
                    <Card>
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_one}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
}

export default Initiatives;