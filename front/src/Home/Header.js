import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/final_red_1.png';
import search from '../image/search.png';

import Form from 'react-bootstrap/Form';

import Ligue1 from '../Leagues/Ligue1';

function Header() {
  return (
    <header>
     <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img className="logo" src={logo} /></Navbar.Brand>
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
                                    <Button variant="outline-secondary"><img className="searchIcon" src={search} alt="Button image" /></Button>
                                </Form>
                                <NavDropdown title="Leagues" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={Ligue1}>Ligue 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Champions League</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Login">Log In</Nav.Link>
                                <Nav.Link href="/Login">About Us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
    </header>
  );
}

export default Header;




