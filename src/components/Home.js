import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';

import amsterdam_image_one from '../static/amsterdam_images/amsterdam_image_one.jpg';
import amsterdam_image_two from '../static/amsterdam_images/amsterdam_image_two.jpg';
import amsterdam_image_three from '../static/amsterdam_images/amsterdam_image_three.jpg';
import amsterdam_image_four from '../static/amsterdam_images/amsterdam_image_four.jpg';

const Home = () => {
    return (
        <div className="container">
            <h2 className="center">Amsterdam and Its Smart City Initiatives</h2>
            <p>Amsterdam, since 2009, has publicly declared their intentions on becoming a smart city. This website goes through initiatives
                 the city has taken to achieve that goal, including winning the title of "European Capital of Innovation" in 2016, and what
                 has led the city to gain that title.</p>

            <br />

            <Grid container spacing={2}>
                <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_one}
                            />
                            <br />
                            
                            <Link to="/history">History</Link>
                            <p>
                                Amsterdam's smart city initiatives have been ongoing for over a decade, and weren't always what they are today. Click <Link to="/history">here</Link> to read
                                about the history behind them.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_two}
                            />
                            <br />
                            <Link to="/initiatives">Initiatives</Link>
                            <p> 
                                The local government in Amsterdam has done a lot to try to make the city a leader in technology. Click <Link to="/initiatives">here</Link> to read
                                about the many initiatives the city has undertaken.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_three}
                            />
                            <br />
                            <Link to="/dashboard">Dashboard</Link>
                            <p>
                                The city of Amsterdam provides lots data available to the public. Click <Link to="/dashboard">here</Link> to view some of them.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} justifyContent="center" direction="row" alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                            <CardMedia 
                                component="img"
                                height="200"
                                image={amsterdam_image_four}
                            />
                            <br />
                            <Link to="/sources">Sources</Link>
                            <p>
                                Click <Link to="/sources">here</Link> to view all sources used to build this website.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>

    )
}

export default Home;