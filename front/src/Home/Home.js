import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Article from "../article/Article";

import home from "../image/home.png";
import streaming from "../image/streaming.png";
import profil from "../image/profil.png";
import logo from "../image/final_red_1.png";
import search from "../image/search.png";

import Form from "react-bootstrap/Form";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home(props) {
  //make a get request to localhost:8000/test with axios

  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    // The function is asynchronous
    const articles = JSON.parse(
      (await axios.get("http://localhost:8000/api/article")).data
    );
    // console.log(articles)
    setData(articles);
    setSelectedData(articles)
    // console.log(data)
  }

  async function logout(){

       axios({
         method: 'get',
         url: 'http://localhost:8000/api/logout',
         headers: {
           'Authorization': 'Bearer ' + props.cookie.mycookie.token,
           'Content-Type': 'application/json'
         }
       }).then((response) => {
          console.log(response)
        });
      props.removeCookie("mycookie")
  }


  function SearchFilter(){
   let searchValue = document.getElementById('search').value;
   console.log(searchValue)
//    console.log(data.filter(article => article.title.includes("ecoal")))
    // const [searchTerm, setSearchTerm] = useState("");
    // console.log("HALOO" + data.filter(article => article.title.toUpperCase().includes("TEST")))
     let newArray = data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase()));
     console.log(newArray)
    setSelectedData(data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase())));
    
    
    }


  return (
    <>
      {console.log(selectedData)}
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img className="logo" src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    id="search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary" onClick={SearchFilter}>
                    <img
                      className="searchIcon"
                      src={search}
                      alt="Button image"
                    />
                  </Button>
                </Form>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Login">Log In</Nav.Link>
                <Nav.Link href="/Login">About Us</Nav.Link>
                <NavDropdown title="Leagues" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Ligue 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Champions League
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

                {selectedData.length ? selectedData.map(n => <Article key={n.id} id={n.id} title={n.title} content={n.content} thumbnail={n.thumbnail}></Article>) : <div>LOADING</div>}


        <Navbar bg="light" fixed="bottom" className="bottomNavbar">
          
                <Nav.Link href="/"> <img className="homeIcon icon" src={home}/> </Nav.Link>
                <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src={streaming}/> </Nav.Link>
                <Nav.Link href="/User"> <img className="homeProfil icon" src={profil}/> </Nav.Link>
                <button onClick={logout}>Logout</button>

          
        </Navbar>

        {/* {data.map( n => console.log(n))} */}

        {/* <Article name={data.title}></Article> */}

        {/* <div className='articles mt-5'>
                <Article></Article>
                </div> */}
      </div>
    </>
  );
}
