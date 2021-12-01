import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../resources/logo.png';

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
                            height: "50px"
                        }}>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src={logo} height="60" width="60" alt="Koel Memories Logo" className="rounded-circle" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'>
                                        <i className="fa fa-home fa-lg" />Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/gallery'>
                                        <i className="fa fa-image fa-lg" />Gallery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>
                                        <i className="fa fa-info fa-lg" />About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'>
                                        <i className="fa fa-address-cards fa-lg" />Contact
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