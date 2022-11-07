import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div className="container">
            <h2 className="center">Amsterdam and Its Smart City Initiatives</h2>
            <p>Amsterdam, since 2009, has publicly declared their intentions on becoming a smart city. This website goes through initiatives
                 the city has taken to achieve that goal, including winning the title of "European Capital of Innovation" in 2016, and what
                 has led the city to gain that title.</p>

            <br />
            <a href="/history">History</a>
            <p>Amsterdam's smart city initiatives have been ongoing for over a decade, and weren't always what they are today. Click <a href="/history">here</a> to read
                about the history behind them.
            </p>

            <br />
            <a href="/initiatives">Initiatives</a>
            <p>The local government in Amsterdam has done a lot to try to make the city a leader in technology. Click <a href="/initiatives">here</a> to read
                about the many initiatives the city has undertook.
            </p>

            <br />
            <a href="/dashboard">Dashboard</a>
            <p>The city of Amsterdam provides lots of live data feeds available to the public. Click <a href="/dashboard">here</a> to view some of them.
            </p>

            <br />
            <a href="/sources">Sources</a>
            <p>Click <a href="/sources">here</a> to view all sources used to build this website.
            </p>
        </div>

    )
}

export default Home;