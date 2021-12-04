import React from 'react';
import projects from '../data/projects.js';

function Projects() {

    return (
        <div>
            <h3>
                PROJECTS
            </h3>
            {projects.map((project) => (
                <div>
                    <h5>
                        {project.name}
                    </h5>
                    <div>
                        {project.description}
                    </div>
                    <div>
                        {project.technologies.map((technology) => (
                            <div>{technology}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;