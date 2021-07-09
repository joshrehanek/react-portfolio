import React from 'react';
import { Card, Button } from "react-bootstrap";
import "./ProjectCard.css"

export default function ProjectCard({ path, src, text, href, href2, label }) {
    return (
        <div className="projects">
            <Card>
                <Card.Img path={path} variant="top" src={src} />
                <Card.Body>
                    <Card.Text className="label">
                        {label}
                    </Card.Text>
                    <Card.Text className="project-text">
                        {text}
                    </Card.Text>
                    <a target="_blank" rel="noreferrer" href={href}>
                    <Button className="project-btn" variant="primary">
                            View Project
                    </Button>
                    </a>
                    <a target="_blank" rel="noreferrer" href={href2}>
                    <Button className="repo-btn" variant="success">
                            Github Repo
                    </Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}