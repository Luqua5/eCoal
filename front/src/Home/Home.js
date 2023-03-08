import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Article from "../article/Article";
import logo from '../image/final_red_1.png'; 


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home() {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);
    

    useEffect(() => {
        getArticles();
      }, []);

    async function getArticles() {  // The function is asynchronous
        const articles = JSON.parse((await axios.get('http://localhost:8000/api/article')).data)
        // console.log(articles)
        setData(articles)
        // console.log(data)
       
    }
    return (
        <>
            {/* {console.log(data)} */}
            <div>
            

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img className="logo" src={logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="/Login">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {data.length ? data.map(n => <Article key={n.id} id={n.id} title={n.title} content={n.content} thumbnail={n.thumbnail}></Article>) : <div>LOADING</div>}

                 


                {/* {data.map( n => console.log(n))} */}


              {/* <Article name={data.title}></Article> */}
          

                {/* <div className='articles mt-5'>
                <Article></Article>
                </div> */}

            </div>
        </>
    );
}