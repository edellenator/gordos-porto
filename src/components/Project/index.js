import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Project = (props) => {
    const {projects = []} = props
    console.log(projects)
    return (
        <div className="container">
            <div className="row justify-content-between">
                {projects.map((project) => (
                <div className="card text-bg-white col-3 m-1 border border-0">
                    <img 
                        src={require(`../../assets/images/${project.id}.png`)} 
                        alt={project.name}
                        className="card-img flex-fill project-img" 
                        key={project.name}
                    />
                    <div className="card-img-overlay">
                        <div className="project-button">
                            <h3 className="card-title">{project.name}</h3>
                            <p className="card-text">{project.description}</p>
                            <p>
                                <a href={project.github} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <span className="m-4">
                                <a href={project.deployed} target="_blank">
                                    <FontAwesomeIcon icon={faLink} size="2x" />
                                </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                ))}   
            </div>
        </div>
    );
}

export default Project;