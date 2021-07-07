import React from 'react';
import './Bio.css';
import { Container, Row, Col } from 'react-bootstrap';
import Headshot from '../../assets/images/Headshot(B&W).jpg'

export default function Bio() {
    return (
        <div id="bio">
            <Container  className="bio-container">
                <Row>
                    <Col lg={9}>
                        <div class="heading">
                            <h2>Bio</h2>
                        </div>
                        <div>
                            <h5 class="bio-content">I make Full-Stack web apps with an emphasis on accessability, fluidity, & flexability. Creating is my passion, having spent over a decade as a performer I get a rush from collaborating with other passionate individuals to create beautiful and intuitive applications for people from all walks of life.  </h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <img
                        src={Headshot}
                        alt='headshot'
                        />
                    </Col>
                </Row>

            </Container>

        </div>
    );
};
