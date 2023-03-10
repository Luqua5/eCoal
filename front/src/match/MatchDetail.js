import "./Match.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

 

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";





// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function MatchDetail(props) {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);

    

    




    return (
        <>
            {console.log(props.league)}


            <Row xs={1} md={2} className="g-4 cardArticle">
                    
                    <Col className="mt-5">
                        <Card >
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <h6>{props.league} : {props.season} </h6>
                                <Card.Title><img className="logo" src={props.logoAway}></img>{props.away} : {props.goalsAway}</Card.Title>
                                <Card.Title><img src={props.logoHome}></img>{props.home} : {props.goalsHome}</Card.Title>

                                <Card.Text>
                            

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>




        </>
    );
}