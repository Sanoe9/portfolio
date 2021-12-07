import React from 'react';
import './Banner.css';

function Banner() {

    return (
        <div className="space_vertical" id="banner">
            <div className="home">HOME</div>
            <div className="nav">
                <div className="space_horiz">Projects</div>
                <div className="space_horiz">Tech Stack</div>
                <div className="space_horiz">Contact</div>
            </div>
        </div>
    );
}

export default Banner;