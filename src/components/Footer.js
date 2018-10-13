import React from 'react';
import facebookIcon from '../images/facebookIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import instagramIcon from '../images/instagramIcon.png';
import '../App.css';

const Footer = (props) => {
        
    return (
        <footer className="App-footer">
            <p>&copy; 2018 ElectricFries. All Rights Reserved.</p>
            <div className="socialMediaIcons">
                <img src={facebookIcon} className="icons" alt="facebook icon" />
                <img src={twitterIcon} className="icons" alt="twitter icon" />
                <img src={instagramIcon} className="instagramIcon" alt="instagram icon" />
            </div>
        </footer>
    )
}

export default Footer;