//import dependencies
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Footer.css';

export default function Footer() {
    return (
        <Card id='contact'>
            <h2> Contact</h2>
            <Card.Body class='footer-contact'>
                <div class="icon">
                    <i class="fas fa-street-view"></i>
                </div>
                <div class="text">
                    <h3>Address</h3>
                    <p>5528 NE 14th Ave,
                        Portland, Oregon
                        97211
                    </p>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>918-361-6213</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>joshrehanek@gmail.com</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
            );
};
