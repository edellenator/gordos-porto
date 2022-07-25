import React from "react";

const Project = (props) => {
    const {projects = []} = props
    console.log(projects)
    return (
        <div className="container">
            <div className="row justify-content-between">
                {projects.map((project) => (
                <div className="card text-bg-white col-4 m-1 border border-0">
                    <img 
                        src={require(`../../assets/images/${project.id}.png`)} 
                        alt={project.name}
                        className="card-img" 
                        key={project.name}
                    />
                    <div className="card-img-overlay">
                        <h5 className="card-title align-middle">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                </div>
                ))}   
            </div>
        </div>
    );
}

export default Project;