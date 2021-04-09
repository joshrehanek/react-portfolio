import React from 'react';
import CardData from '../CardData/CardData';
import AccessibilityImg from '../../assets/images/Accessibility.jpg';
import FullStack from '../../assets/images/full_stack.png'
import WebDesign from '../../assets/images/web-design-2.png'
import './Cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <h2>Services</h2>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-data-ul">
                        <CardData 
                            src= {AccessibilityImg}
                            text= "Websites made with a focus on accessibility for all types of users."
                            label="Accessibility"
                            path="/services"
                        />
                        <CardData 
                            src= {FullStack}
                            text= "Front to Back we got you covered. User interface & experience, routing, databases, & more. Let's
                            build the complete website of your dreams."
                            label="Full-Stack Web Development"
                            path="/services"
                        />
                        <CardData 
                            src={WebDesign}
                            text= "Modern, stylish, & functional websites that are intuitive & easy to use."
                            label="Web Design || UI/UX"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
