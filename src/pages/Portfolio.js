import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
    const projects = [
        {
            id: '01',
            name: 'Food Finder',
            description: 'Front-end Javascript/ Third party API',
            github: 'https://github.com/clickity-clacking/food-finder',
            deployed: 'https://clickity-clacking.github.io/food-finder/'
        },
        {
            id: '02',
            name: 'Run Buddy',
            description: 'HTML/CSS front end only',
            github: 'https://github.com/edellenator/runBuddy',
            deployed: 'https://edellenator.github.io/runBuddy/'
        },
        {
            id: '03',
            name: 'Selling Later',
            description: 'Javascript, SQL, Sequelize, Express',
            github: 'https://github.com/clickity-clacking/selling-later',
            deployed: 'https://tranquil-tundra-77123.herokuapp.com/'
        },
        {
            id: '04',
            name: 'Weather Tether',
            description: 'Front End/ Third party API',
            github: 'https://github.com/edellenator/weather-tether',
            deployed: 'https://edellenator.github.io/weather-tether/'
        },
        {
            id: '05',
            name: 'Deja-IMp',
            description: 'MERN',
            github: 'https://github.com/edellenator/Deja-imp',
            deployed: 'https://deja-imp.herokuapp.com/'
        },

    ]
    return (

        <div className="container project-container">
            <Project
                projects={projects} 
            />
        </div>
    );


};

export default Portfolio;