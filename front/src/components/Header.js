import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./components.css"
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <header>
     <Navbar className="TopNav" expand="lg">
                    <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home"><img className="logo-nav" src="/image/logo_txt.png" /></Navbar.Brand>
                    </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-secondary"><img className="searchIcon" src="/image/search.png" alt="Button image" /></Button>
                                </Form>
                                <NavDropdown title="Leagues" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Ligue1">Ligue 1</NavDropdown.Item>
                                    <NavDropdown.Item href="/ChampionsLeague">Champions League</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Login">Log In</Nav.Link>
                                <Nav.Link href="/AboutUs">About Us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
    </header>
  );
}

export default Header;




