import React from "react";
import "../../styles.css"
import "./Hero.css"
import PurpleGrid from "../../assets/videos/PurpleGrid.mp4"


export default function Hero() {
    return (
        <div className="hero">
            <video
                autoPlay
                loop
                muted>
                <source
                    src={PurpleGrid}
                    type="video/mp4" />
            </video>
            <section class="banner" id="home">
                <div class="text-box">
                    <h2>Welcome, I'm<br></br><span>Joshua Azzam Rehanek.</span> </h2>
                    <h3>Full Stack Web Developer</h3>
                <br>
                </br>
                <a
                    class="link"
                    href="https://www.linkedin.com/in/joshua-rehanek-a266a0200/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
                        alt="link to linkedin"
                    />
                </a>
                <a
                    class="link"
                    href="https://github.com/joshrehanek" target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://img.icons8.com/dusk/64/000000/github.png"
                        alt="link to github" />
                </a>
                <a
                    class="link"
                    href="./assets/images/Resume.pdf"
                    download="./assets/images/Resume.pdf"
                >
                    <img
                        src="https://img.icons8.com/nolan/64/open-resume.png"
                        alt="download resume" />
                </a>
                </div>
            </section>
            
        </div>
    )
}
