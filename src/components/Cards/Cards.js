import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesCard from '../ServicesCard/ServicesCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import AccessibilityImg from '../../assets/images/Accessibility.jpg';
import FullStack from '../../assets/images/full_stack.png';
import WebDesign from '../../assets/images/web-design-2.png';
import Recipes from '../../assets/images/everyday-recipes-2.png';
import BarTrivia from '../../assets/images/Getcha-Fix-Bar-Trivia2.png';
import Fitness from '../../assets/videos/fitness-demo.gif';
import WeatherApp from '../../assets/images/react-weather-app.png';
import ShowMyShow from '../../assets/videos/showmyshow.gif'
import './Cards.css';


export default function Cards() {
    return (
        <>
            <div id="services" className="cards">
                <h2>Services</h2>
                <Container className="cards-container">
                    <Row className="service-row">
                        <Col>
                            <ServicesCard
                                src={AccessibilityImg}
                                text="Websites made with a focus on accessibility for all types of users."
                                label="Accessibility"
                                path="/services" />
                        </Col>
                        <Col>
                            <ServicesCard
                                src={FullStack}
                                text="Fluent in:  React, Javascript, Node, Express, Mongoose, MySQL, Sequelize, JQuery, HTML, CSS,  Bootstrap, Foundation, Git, AJAX, and more."
                                label="Full-Stack Web Development"
                                path="/services"
                            />
                        </Col>
                        <Col>
                            <ServicesCard
                                src={WebDesign}
                                text="Modern, stylish, & functional websites that are intuitive & easy to use."
                                label="Web Design || UI/UX"
                                path="/services" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="projects" className="cards">
                <h2 id="projects">Projects</h2>
                <Container className="cards-container">
                    <Row >
                        <Col>
                            <ProjectCard
                                src={ShowMyShow}
                                label="ShowMyShow"
                                text="A event app that allows the user to view shows in an area, save their favorite show, & chat with other music lovers & artists alike. Built using the MERN stack."
                                path="/projects"
                                href="https://showmyshow.herokuapp.com/"
                                href2="https://github.com/joshrehanek/showmyshow"
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                src={Recipes}
                                label="Everyday Recipes"
                                text="A full stack web Recipe app that allows users to create, save, update, & delete recipes built using Javascript, HTML, CSS, Node, Express, & Sequelize."
                                path="/projects"
                                href="https://my-favorite-recipes-app-portla.herokuapp.com/"
                                href2="https://github.com/jinxdoll/my-favorite-recipes-app"
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                src={WeatherApp}
                                label="Anime Weather App"
                                text="A front end weather app that allows users to search any city in the world and get the current weather. The apps background changes Anime themes to reflect the weather in the city the user searched. This app is built using React, Javascript, HTML, CSS, React Bootstrap, Node. & the OpenWeatherAPI."
                                path="/projects"
                                href="https://frozen-headland-03564.herokuapp.com/"
                                href2="https://github.com/joshrehanek/react-weather-app"
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                src={BarTrivia}
                                label="Getcha Fix Virtual Bar Trivia"
                                text="A front end Bar Trivia Simulator that gives users drink suggestions, classic drink recipes, as well as a random Drink of the Moment. The user can then play a 10 question round of trivia and store their high score locally. This app is built using Javascript, HTML, CSS, Foundation, TheCocktailDB API, & Open Trivia Database API."
                                path="/projects"
                                href="https://joshrehanek.github.io/bar-trivia-simulator/"
                                href2="https://github.com/joshrehanek/bar-trivia-simulator"
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                src={Fitness}
                                label="Fitness Workout Tracker"
                                text="A full stack fitness tracking app that allows users to save and store their workouts which are then rendered into graphs. This app is built using Javascript, HTML, CSS, Node, Express, & Mongoose."
                                path="/projects"
                                href="https://gentle-reef-09121.herokuapp.com/stats"
                                href2="https://github.com/joshrehanek/fitness-tracking-app"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};