import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import header from '../../images/event-1.jpg';
import Slider from './Slider';

const Header = () => {
    return (
        <header className="headerBg">
            <Navbar />
            <Slider></Slider>
        </header>
    );
};

export default Header;