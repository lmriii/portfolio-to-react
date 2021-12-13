import React from "react";
import About from "./About";
import HomeHero from "./HeroCarousel";
import Newborn1 from './NewbornGallery1'

function Home() {
    return (
        <>
            <h1 style={{
                marginTop: '50px'
            }} >Freezing Moments in Time with Pictures</h1>
            <HomeHero />
            <Newborn1 />
            <About />
            
        </>
    );
}

export default Home;
