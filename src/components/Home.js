import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import HomeHero from "./HeroCarousel";
import NewbornGallery1 from './NewbornGallery1'

function Home(){
    return(
        <>
            <h1 style={{
                                    marginTop: '50px'
                                }} >Freezing Moments in Time with Pictures</h1>
            <HomeHero />
            <About />
            <NewbornGallery1 />
            <Contact />
        </>
    );
}

export default Home;
