import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import background from '../resources/maternity2.jpg';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Hero() {
    return (
        <React.Fragment>
            <Jumbotron
                fluid
                style={{
                    backgroundImage: 'URL(' + background + ')',
                    backgroundSize: 'cover',
                    height: '100vh'
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Koel Memories Photography</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}


export default Hero;