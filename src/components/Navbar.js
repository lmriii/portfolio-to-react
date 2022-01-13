import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../resources/new-logo.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar light sticky="top" expand="md" style={{
                    fontFamily: "'tangerine', cursive",
                    marginTop: "0",
                    textAlign: "center",
                    backgroundColor: "rgba(128, 128, 128, .7)",
                    color: "white",
                    height: "40px"
                }}>
                    <div className="container">
                        <NavbarBrand
                            className="mr-auto"
                            href="/"><img src={logo}
                                height="70"
                                width="70"
                                alt="Koel Memories Logo"
                                className="rounded-circle"

                            />
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={this.toggleNav}
                        />
                        <Collapse
                            isOpen={this.state.isNavOpen}
                            navbar
                        >
                            <Nav
                                navbar>
                                <NavItem>
                                    <NavLink
                                        style={{ textShadow: "2px 2px rgba(137, 134, 135, 0.8)" }}
                                        className="nav-link"
                                        to='/'>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/gallery'>
                                        Gallery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/about'>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/contact'>
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Navigation;