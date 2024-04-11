import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    return(

        <Navbar style={{ backgroundColor: '#FDD32B' }} >
        <Container fluid>
                <Navbar.Brand as = {NavLink} to = {"/"}>Navbar</Navbar.Brand>
                <Nav className = "me-auto">
                    <Nav.Link as = {NavLink} to = {"/Home"}>Home</Nav.Link>
                    <Nav.Link as = {NavLink} to = {"/Characteres"}>Characters</Nav.Link>
                    <Nav.Link as = {NavLink} to = {"/About"}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar> 
    );
};
export default NavbarComponent;