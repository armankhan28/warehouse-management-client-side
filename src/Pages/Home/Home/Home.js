import React from 'react';
import Banner from '../Banner/Banner';
import Icons from '../Icons/Icons';
import OurServices from '../OurServices/OurServices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Icons></Icons>
            <Services></Services>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;