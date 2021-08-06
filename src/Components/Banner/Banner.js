import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bannerBG p-5">
            <div style={{ margin: '0 auto', borderRadius: '10px'}} className="bannerTittle text-center">
                <h2 className=""> Are you looking A world class PhotoGrapher?</h2>
                <h5 className="">It is the place where you can get your dream photographer.</h5>
                <h5 className="">Our target to provide the world class PhotoGraphy. Thank you for choosing us.</h5>
            </div>
        </div>
    );
};

export default Banner;