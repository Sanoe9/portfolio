import React from 'react';
import './Banner.css';

function Banner() {

    return (
        <div className="space_vertical" id="banner">
            <div className="space_horiz clickable" onClick={() => document.getElementById("projects").scrollIntoView()}>Projects</div>
            <div className="space_horiz clickable" onClick={() => document.getElementById("tech_stack").scrollIntoView()}>Tech Stack</div>
            <div className="space_horiz clickable" onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</div>
        </div>
    );
}

export default Banner;