import React from 'react';
import techstack from '../../data/techstack.js';
import './TechStack.css';

function TechStack() {

    return (
        <div>
            <h3>
                TECHSTACK
            </h3>
            <div className="techs">
                {techstack.map((element) => (
                    <div className="tech">{element}</div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;