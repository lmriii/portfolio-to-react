import React from "react";
import Home from "./Home";
import Navigation from "./Navbar";
import Gallery from "./GalleryContainer";
import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import { Routes, Route } from 'react-router-dom';
 

class Main extends React.Component {

    render(){
        return (
            <div>
                <Hero />
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                
            </div>
        )}
}




export default Main;