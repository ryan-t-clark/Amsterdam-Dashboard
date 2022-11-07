import React from 'react';
import '../App.css';

const Initiatives = () => {
    return (
        <div className="container">
            <h2 className="center">City Initiatives</h2>

            <h3>The Amsterdam Smart City Initiative (ASC)</h3>
            <p>As the title describes, the ASC is the program that aims to fund and facilitate the
                implementation of smart city projects. They have led over 80 projects to the market,
                focusing on the use of data to improve the wellbeing of citizens.
            </p>
            
            
            <h3>My Neighbor App</h3>
            <p>MjinBurr, which translates to the My Neighbor App, is an App in the Amsterdam that
                connects communities. Its goal is to allow neighbors to work through issues together
                without the need for involving local government or police. Its meant to save time
                and money for everyone involved by settling differences without escalation.
            </p>

            <h3>...</h3>
            <p>TODO: add more projects</p>
        </div>

    )
}

export default Initiatives;