import React from 'react';
import projects from '../../data/projects.js';
import './Projects.css';
import { FaCode } from 'react-icons/fa';

function Projects() {

    return (
        <div className="projects" id="projects" >
            <h3 className="rubrique">
                PROJECTS
            </h3>
            {projects.map((project, key) => (
                <div className="project" key={key}>
                    <div className="one_flex">
                        <img className= {`${project.name}_gif`} alt="Demo" src={`./${project.name}.gif`} />
                    </div>
                    <div className="two_flex">
                        <div className="project_name">
                            {project.name}
                        </div>
                        <div className="space_vertical">
                            {project.description}
                        </div>
                        <div className="techs space_vertical">
                            {project.technologies.map((technology, key) => (
                                <div className="tech" key={key}>{technology}</div>
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