import React from 'react';
import "../../styles.css";
import Cards from '../Cards/Cards';
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer"
import Bio from "../Bio/Bio"

export default function Home () {
    return (
        <div>
            <Hero />
            <Bio />
            <Cards />
            <Footer />
        </div>
    )
}

