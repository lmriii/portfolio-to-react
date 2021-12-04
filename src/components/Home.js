import React from "react";
import About from "./About";
import HomeHero from "./HeroCarousel";

function Home() {
    return (
        <>
            <h1 style={{
                marginTop: '50px'
            }} >Freezing Moments in Time with Pictures</h1>
            <HomeHero />
            <About />
            
        </>
    );
}

export default Home;
