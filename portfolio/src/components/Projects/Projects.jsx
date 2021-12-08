import React from 'react';
import projects from '../../data/projects.js';
import './Projects.css';
import { FaCode } from 'react-icons/fa';

function Projects() {

    return (
        <div className="projects" id="projects" >
            <h3>
                PROJECTS
            </h3>
            {projects.map((project, key) => (
                <div className="project" key={key}>
                    <div className="one_flex">
                        GIF HERE
                    </div>
                    <div className="two_flex">
                        <h5>
                            {project.name}
                        </h5>
                        <div className="space_vertical">
                            {project.description}
                        </div>
                        <div className="techs space_vertical">
                            {project.technologies.map((technology, key) => (
                                <div className="project_tech" key={key}>{technology}</div>
                            ))}
                        </div>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaCode className="source_code" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;