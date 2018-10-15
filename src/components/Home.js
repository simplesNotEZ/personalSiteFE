import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';
import bottledLightning from '../images/bottledLightning4.png';
import CFL from '../images/cFL.jpeg';
import incandescent from '../images/incandescent.jpg';
import tubeBulb from '../images/tubeBulb.jpeg';


const Home = (props) => {
    
    return (
        <div className="home">
            <div className="subHome">
                <Link to="/about" className="link incandescentLink">
                    <section className="linkSection">
                        <img src={incandescent} className="devices" alt="an incandescent bulb"/>
                        <h2 className="incandescent">About</h2>
                    </section>
                </Link>
                <section className="bottleLink">
                    <img src={bottledLightning} className="power" alt="lightning in a bottle" />
                    <h1 className="bottle">infuse</h1>
                </section>
                <Link to="/projects"  className="link CFLLink">
                    <section className="linkSection">
                        <img src={CFL} className="devices" alt="a CFL bulb"/>
                        <h2 className="CFL">Projects</h2>
                    </section>
                </Link>
                <Link to="/contact" className="link tubeLink">
                    <section className="linkSection">
                        <img src={tubeBulb} className="devices" alt="tube light" />
                        <h2 className="tubeLight">Contact Info</h2>
                    </section>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home;