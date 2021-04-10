import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-contact">
                <div class="heading">
                    <h2>Contact</h2>
                </div>
                <div class="content">
                    <div class="contactInfo">
                        <h3>Contact Info</h3>
                        <div class="contactInfoBox">
                            <div class="box">
                                <div class="icon">
                                    <i class="fas fa-street-view"></i>
                                </div>
                                <div class="text">
                                    <h3>Address</h3>
                                    <p>5528 NE 14th Ave,
                                    Portland, Oregon
                                    97211</p>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
