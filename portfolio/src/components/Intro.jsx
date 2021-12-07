import React from 'react';
import intro from '../data/introduction.js';

function Intro() {

    return (
        <div id="intro">
            <div id="my_pic" className="one_flex">
                my picture here
            </div>
            <div id="intro_text" className="two_flex">
                <div>
                    {intro.introTitle}
                </div>
                <div>
                    {intro.introBody}
                </div>
                <a href={intro.resume} target="_blank" rel="noopener noreferrer">
                    <button type="button">Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Intro;