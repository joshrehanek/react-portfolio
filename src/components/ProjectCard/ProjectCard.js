import React from 'react';
import { Card, Button } from "react-bootstrap";
import "./ProjectCard.css"

export default function ProjectCard({ path, src, text, href, label }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img path={path} variant="top" src={src} />
                <Card.Body>
                    <Card.Text className="label">
                        {label}
                    </Card.Text>
                    <Card.Text className="project-text">
                        {text}
                    </Card.Text>
                    <a target="_blank" rel="noreferrer" href={href}>
                        <Button variant="primary">
                            View Project
                    </Button>
                    </a>
                </Card.Body>
            </Card>
        </>
    )
}