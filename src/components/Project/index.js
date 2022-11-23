import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Project = (props) => {
    const {projects = []} = props
    console.log(projects)
    return (
        <div className="row">

            <div className="slider col-12">
                {/* <div className="row justify-content-between"> */}
                    {projects.map((project) => (
                        <a href={`#slide-${project.id}`}>{project.id}</a>
                    ))}
                    <div className="slides">
                        {projects.map((project) => (
                            <div className="card" id={`slide-${project.id}`}>
                                <img 
                                    src={require(`../../assets/images/${project.id}.svg`)} 
                                    alt={project.name}
                                    className="card-img-top img-thumbnail" 
                                    key={project.name}
                                />
                                <div className="card-body">
                                        <p className="card-title">{project.name}</p>
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
                        ))}
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Project;