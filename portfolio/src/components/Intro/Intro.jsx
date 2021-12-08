import React from 'react';
import intro from '../../data/introduction.js';
import './Intro.css';

function Intro() {
    console.log(intro.introPic)
    return (
        <div id="intro" >
            <div className="one_flex">
                <img id="my_pic" alt="My Picture" src="./myPic.jpg" />
            </div>
            <div id="intro_text" className="two_flex">
                <div className="space_vertical">
                    {intro.introTitle}
                </div>
                <div className="space_vertical">
                    {intro.introBody}
                </div>
                <a className="space_vertical" href={intro.resume} target="_blank" rel="noopener noreferrer">
                    <span type="button" className="btn">Resume</span>
                </a>
            </div>
        </div>
    );
}

export default Intro;
