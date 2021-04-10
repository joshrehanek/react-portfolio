import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import AccessibilityImg from '../../assets/images/Accessibility.jpg';
import FullStack from '../../assets/images/full_stack.png';
import WebDesign from '../../assets/images/web-design-2.png';
import Recipes from '../../assets/images/everyday-recipes-2.png';
import BarTrivia from '../../assets/images/Getcha-Fix-Bar-Trivia.png';
import Fitness from '../../assets/images/fitness-app.png';
import WeatherApp from '../../assets/images/react-weather-app.png';

import './Cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <h2>Services</h2>
            <div className="cards-container">

                <div className="service-card col-lg-4 d-flex align-items-stretch">
                    
                    <ServicesCard 
                        src={AccessibilityImg}
                        text="Websites made with a focus on accessibility for all types of users."
                        label="Accessibility"
                        path="/services" />
                </div>

                <div className="service-card col-lg-4 d-flex align-items-stretch">
                    
                    <ServicesCard 
                        src= {FullStack}
                        text= "Front to Back we got you covered. User interface & experience, routing, databases, & more. Let's
                        build the complete website of your dreams."
                        label="Full-Stack Web Development"
                        path="/services"
                    />
                </div>

                <div className="service-card col-lg-4 d-flex align-items-stretch">
                    <ServicesCard
                    src={WebDesign}
                    text= "Modern, stylish, & functional websites that are intuitive & easy to use."
                    label="Web Design || UI/UX"
                    path="/services"  />
                </div>
            </div>

            <h2>Projects</h2>

            <div className="cards-container   ">
                <ul>
                    <div className="project-card col d-flex align-items-stretch">
                        <ProjectCard
                            src={Recipes}
                            text="A full stack web Recipe app using Javascript, HTML, CSS, Node, Express, & Sequelize."
                            path="/projects"
                        />
                        </div>

                        <div className="project-card col-lg d-flex align-items-stretch">
                        <ProjectCard
                            src={WeatherApp}
                            text="A front end weather app using React, Javascript, HTML, CSS, React Bootstrap, & Node."
                            path="/projects"
                        />
                        </div>
                </ul>
                <ul>
                        <div className="project-card col-lg d-flex align-items-stretch">
                        <ProjectCard
                            src={BarTrivia}
                            text="A front end Bar Trivia Simulator using Javascript, HTML, CSS, Foundation, TheCocktailDB API, & Open Trivia Database API."
                            path="/projects"
                        />
                        </div>
                        
                        <div className="project-card col-lgd-flex align-items-stretch">
                        <ProjectCard
                            src={Fitness}
                            text="A full stack fitness tracker using Javascript, HTML, CSS, Node, Express, & Mongoose."
                            path="/projects"
                        />
                        </div>

                </ul>
                </div>
            </div>
    )
}
