import React from "react";
import About from "./About";
import Footer from './Footer'
import HeroCarousel from "./HeroCarousel";


function Home() {
    return (
        <>
            <h1 style={{
                marginTop: '50px'
            }} >Freezing Moments in Time with Pictures</h1>
            <HeroCarousel />
            <About />
            <Footer />
        </>
    );
}

export default Home;
