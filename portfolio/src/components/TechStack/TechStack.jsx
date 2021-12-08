import React from 'react';
import techstack from '../../data/techstack.js';
import './TechStack.css';

function TechStack() {

    return (
        <div id="tech_stack">
            <h3>
                TECHSTACK
            </h3>
            <div className="techs">
                {techstack.map((element, key) => (
                    <div className="tech" key ={key}>{element}</div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;