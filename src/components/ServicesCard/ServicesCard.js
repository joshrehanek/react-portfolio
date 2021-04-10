import React from 'react';
import {Card} from "react-bootstrap";

export default function ServicesCardData({ path, label, src, text }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img path={path} variant="top" src={src} />
                <Card.Body>
                    <Card.Text>
                       {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
