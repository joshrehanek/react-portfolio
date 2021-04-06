import React from "react";
import "../../styles.css"
import "./Hero.css"
import { Button } from "../Button/Button";



export default function Hero() {
    return (
        <div className="hero">
            <video src="/videos/PurpleGrid.mp4" autoPlay loop />
            <h1>Open-Minded Development</h1>
            <div className="hero-btns">
                <Button
                    className="btns"
                    // buttonStyle="btn-outline"
                    buttonSize="btn-large">
                    <i class="fab fa-github" />
                </Button>
                <Button
                    className="btns"
                    // buttonStyle="btn-outline"
                    buttonSize="btn-large">
                    <i class="fab fa-linkedin-in" />
                </Button>
                <Button
                    className="btns"
                    // buttonStyle="btn-outline"
                    buttonSize="btn-large">
                    <i class="fas fa-file">Resume</i>
                </Button>
            </div>
        </div>
    )
}
