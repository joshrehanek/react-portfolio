import React from 'react';
import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";


export default function CardData({ path, label, src, text }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{label}</Card.Title>
                    <Card.Text>
                       {TextEncoder}
                    </Card.Text>
                    <Button variant="primary">Github Repo</Button>
                    <Button variant="primary">Github Repo</Button>
                </Card.Body>
            </Card>
        </>
    )
}
