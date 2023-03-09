import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "../article/Article";
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Header from './Header';


// import logo from "../image/profil.png";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';






// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home(props) {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [league, setLeague] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState([]);
    const [selectedID, setSelectedID] = useState(-1);




    useEffect(() => {
        getArticles();
        getLeagues();
    }, []);

 


    async function getArticles() {
        // The function is asynchronous
        const articles = JSON.parse(
            (await axios.get("http://localhost:8000/api/article")).data
        );
        // console.log(articles)
        setData(articles);
        setSelectedData(articles)
        //console.log(selectedData)
    }

    async function getLeagues() {
        // The function is asynchronous
        const leagues = JSON.parse(
            (await axios.get("http://localhost:8000/api/league")).data
        );
        // console.log(articles)
        setLeague(leagues);
        setSelectedLeague(leagues)
        // setSelectedData(articles)
        // console.log(data)
    }

    async function logout() {

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


    function SearchFilter() {
        let searchValue = document.getElementById('search').value;
        console.log(searchValue)
        //    console.log(data.filter(article => article.title.includes("ecoal")))
        // const [searchTerm, setSearchTerm] = useState("");
        // console.log("HALOO" + data.filter(article => article.title.toUpperCase().includes("TEST")))
        let newArray = data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase()));
        console.log(newArray)
        setSelectedData(data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase())));


    }




  


    function SearchLeague() {
        let searchValue = document.getElementById('searchLeague').value;
        console.log(searchValue)
        let newArray = league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase()));
        console.log(newArray)
        setSelectedLeague(league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase())));

    }

    async function SearchArticleByLeague(n) {
        // let teamId = document.getElementById('searchLeague').value;
        console.log("activated")
        let newArray = data.filter(x => x.league_id === n);
        console.log(newArray)
        setSelectedData(newArray)


        // setSelectedData(selectedData.filter(x => x.league_id === selectedID));  

        // console.log(newArray)
        // setSelectedLeague(league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase())));

    }




    return (
        <>
            {/* {console.log(selectedData)} */}
            {/* {console.log(league)} */}

            <div>
                <Navbar  expand="lg" className="navBar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img className="logo-nav" src="/image/logo_txt.png" />
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
                                            src="/image/search.png"
                                            alt="Button image"
                                        />
                                    </Button>
                                </Form>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Login">Log In</Nav.Link>
                                <Nav.Link href="/AboutUs">About Us</Nav.Link>
                                <NavDropdown title="Leagues" id="basic-nav-dropdown" className="navBar">
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search by league"
                                            id="searchLeague"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-secondary" onClick={SearchLeague}>
                                            <img
                                                className="searchIcon"
                                                src="/image/search.png"
                                                alt="Button image"
                                            />
                                        </Button>
                                    </Form>

                                    {selectedLeague.length ? selectedLeague.map(n => <NavDropdown.Item key={n.id} onClick={() => {{SearchArticleByLeague(n.id)}}}>{n.name} </NavDropdown.Item>) : <div>LOADING</div>}
                                    {/* {console.log(selectedID)} */}
                                   
                                    {/* {selectedID !== -1?  SearchArticleByLeague() : null}    
                                     */}
                                    

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {selectedData.length ? selectedData.map(n => <Article key={n.id} id={n.id} title={n.title} content={n.content} thumbnail={n.thumbnail} league_id={n.league_id}></Article>) : <div>LOADING</div>}

                <Footer />
                {/* <Navbar bg="light" fixed="bottom" className="bottomNavbar">
          
                <Nav.Link href="/"> <img className="homeIcon icon" src={home}/> </Nav.Link>
                <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src={streaming}/> </Nav.Link>
                <Nav.Link href="/User"> <img className="homeProfil icon" src={profil}/> </Nav.Link>
                <button onClick={logout}>Logout</button>

                <Navbar  fixed="bottom" className="bottomNavbar">

                    <Nav.Link href="/"> <img className="homeIcon icon" src="/image/home.png " /> </Nav.Link>
                    <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src="/image/streaming.png" /> </Nav.Link>
                    <Nav.Link href="/User"> <img className="homeProfil icon" src="/image/profil.png" /> </Nav.Link>
                    <button onClick={logout}>Logout</button>


                </Navbar>

                {/* {data.map( n => console.log(n))} */}

                {/* <Article name={data.title}></Article> */}

                {/* <div className='articles mt-5'>
                <Article></Article>
                </div> */}
                <button onClick={logout}>Logout</button>
            </div>
        </>
    );
}