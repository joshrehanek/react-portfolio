import React from 'react';

import {Card, Button} from "react-bootstrap";

export default function ProjectCard({ path, src, text, href}) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img path={path} variant="top" src={src}/>
                <Card.Body>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <a target="_blank" rel="noreferrer" href={href}>
                    <Button variant="primary">
                    Github
                    </Button>
                    </a>

                    
                    
                </Card.Body>
            </Card>
        </>
    )
}