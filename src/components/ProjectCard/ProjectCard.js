import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function ProjectCard({ path, src, text }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img path={path} variant="top" src={src} />
                <Card.Body>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                    <Button variant="primary">App</Button>
                </Card.Body>
            </Card>
        </>
    )
}