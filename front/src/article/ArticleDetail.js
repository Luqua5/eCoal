// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function ArticleDetail(props) {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState(undefined);
    const [tags, setTags] = useState([]);


    // useEffect(() => {
    //     getArticles();
    // }, []);

    // async function getArticles() {  // The function is asynchronous
    //     const articles = (await axios.get('http://localhost:8000/api/test')).data
    //     console.log(articles)
    //     return articles;
    // }
    return (
        <>
        {console.log(props.thumbnail)}
            <div>
                {/* HoME
            {getArticles()} */}

                <Row xs={1} md={2} className="g-4">
                    
                        <Col>
                            <Card className="mt-5">
                                <Card.Img variant="top" src={props.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{props.title}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                </Row>


            </div>
        </>
    );
}