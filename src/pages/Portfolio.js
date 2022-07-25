import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
    const projects = [
        {
            id: '01',
            name: 'Food Finder',
            description: 'Front-end Javascript/ Third party API'
        },
        {
            id: '02',
            name: 'Run Buddy',
            description: 'HTML/CSS front end only'
        },
        {
            id: '03',
            name: 'Selling Later',
            description: 'Javascript, SQL, Sequelize, Express'
        },

    ]
    return (
        <div className="container project-container">
            <div className="row">
                <div className="col-12 justify-content-start">Portfolio</div>
            </div>
            <Project
            projects={projects} />
        </div>
    );


};

export default Portfolio;