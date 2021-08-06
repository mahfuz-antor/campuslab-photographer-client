import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ServiceData from '../Services/ServiceData';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <ServiceData />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;