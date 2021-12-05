import React from 'react';
import projects from '../../data/projects.js';
import './Projects.css';

function Projects() {

    return (
        <div>
            <h3>
                PROJECTS
            </h3>
            {projects.map((project) => (
                <div className="project">
                    <div className="one_flex">
                        GIF HERE
                    </div>
                    <div className="two_flex">
                        <h5>
                            {project.name}
                        </h5>
                        <div>
                            {project.description}
                        </div>
                        <div className="project_techs">
                            {project.technologies.map((technology) => (
                                <div>{technology}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;