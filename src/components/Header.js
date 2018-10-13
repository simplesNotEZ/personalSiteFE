import React from 'react';
import { Link } from 'react-router-dom';
import bottledLightning2 from '../images/bottledLightning2.png';


import '../App.css';

const Header = (props) => {
    
    return (
        <header className="header">
            <div className="main-title3">
                <img src={bottledLightning2} className="" alt="logo" />
                <h1 className="App-title3">REally Cool Words</h1>
            </div>
            <div className="navSpots3">
                {/* <Link to="/someday" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Someday</p>
                </Link>
                <Link to="/home" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Home</p>
                </Link>
                <Link to="/yesterday" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Other-Day</p>
                </Link> */}
            </div>
        </header>
    )
}

export default Header;