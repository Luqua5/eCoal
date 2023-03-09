// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ArticleDetail";
import "./Article.css";
 

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";


import ArticleDetail from "./ArticleDetail";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Article(props) {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);

    // const [tags, setTags] = useState([]);

    let array = [{ "id": 1, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T11:34:08.000000Z", "updated_at": "2023-03-07T11:34:08.000000Z" }, { "id": 2, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 3, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 4, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 5, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }, { "id": 6, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }, { "id": 7, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }]




    // useEffect(() => {
    //     getArticles();
    // }, []);
    // // let array = [1, 2, 3]


    // async function getArticles() {  // The function is asynchronous
    //     const articles = JSON.parse((await axios.get('http://localhost:8000/api/article')).data)
    //     // console.log(articles)
    //     setData(articles)
    //     // console.log(data)

    // }


    // {props.content.substr(0,250)}
    useEffect(() => {
        axios.get(`http://localhost:8000/api/league/${props.league_id}`)
    }, []);

    return (
        <>

            
           

            <Row xs={1} md={2} className="g-4 cardArticle">
                    
                    <Col className="mt-5">
                        <Card >
                            <Card.Img variant="top" src={`http://localhost:8000/${props.thumbnail}`}/>
                            <Card.Title class="CatDisplay">Category</Card.Title>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Body>
                                <Card.Title class="date">{props.date}</Card.Title>
                                <Card.Text>
                                    <Link to={`/ArticleDetail/${props.id}`}>
                                        <h1 className="Article_title">{props.content.substr(0,250)}</h1>
                                    </Link>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>



           



            {/* {array.map( n => console.log(n.id))} */}
            {/* {data.map( n => console.log(n.id))} */}
        </>
    );
}