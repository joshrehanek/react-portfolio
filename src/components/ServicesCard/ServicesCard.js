import React from "react";
import {Card} from "react-bootstrap";

export default function ServicesCardData({ path, src, text, label }) {
    return (
        <>
            <Card className="service-card" style={{ width: "18rem" }}>
                <Card.Img path={path} variant="top" src={src} label={label}/>
                <Card.Body>
                    <Card.Text className="label">
                       {label}
                    </Card.Text>
                    <Card.Text>
                       {text} 
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
