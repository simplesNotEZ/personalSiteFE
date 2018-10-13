import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';
import bottledLightning2 from '../images/bottledLightning2.png';
import CFL from '../images/cFL.jpeg';
import incandescent from '../images/incandescent.jpg';
import tubeBulb from '../images/tubeBulb.jpg';


const Home = (props) => {
    
    return (
        <div className="home">
            <div className="subHome">
                <h1>ElectricFries</h1>
                <Link to="/about" className="link">
                    <section className="linkSection sectionBackground">
                        <img src={incandescent} className="devices" alt="an incandescent bulb"/>
                        <h2 className="incandescent">About</h2>
                    </section>
                </Link>
                <section className="sectionBackground">
                    <img src={bottledLightning2} className="devices" alt="lightning in a bottle" />
                </section>
                <Link to="/projects"  className="link">
                    <section className="linkSection sectionBackground">
                        <img src={CFL} className="devices" alt="a CFL bulb"/>
                        <h2 className="CFL">Projects</h2>
                    </section>
                </Link>
                <Link to="/contact" className="link">
                    <section className="linkSection sectionBackground">
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