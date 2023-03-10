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


    let array = [{ "id": 1, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T11:34:08.000000Z", "updated_at": "2023-03-07T11:34:08.000000Z" }, { "id": 2, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 3, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 4, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:30.000000Z", "updated_at": "2023-03-07T18:41:30.000000Z" }, { "id": 5, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }, { "id": 6, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }, { "id": 7, "title": "Welcome to ecoal23", "content": "<h1>Hello from ecoal<\/h1><p>Nice to see you in <strong>Lens<\/strong>. Enjoy !<\/p>", "thumbnailURL": "\/ecoal.jpg", "mediaType": "image", "mediaURL": "\/ecoal.jpg", "leadStory": 0, "created_at": "2023-03-07T18:41:31.000000Z", "updated_at": "2023-03-07T18:41:31.000000Z" }]

    useEffect(() => {
        const category = axios.get(`http://localhost:8000/api/league/${props.league_id}`).then((response) => {
            let res = JSON.parse(response.data);
            setData(res[0].name);
        });
    }, []);
    return (
        <>



            <div className="article">
                                    <Link to={`/ArticleDetail/${props.id}`}>
                <Row xs={1} md={2} className="g-4 cardArticle">

                    <Col className="mt-5">
                        <Card >
                            <div className="thumbnail">
                                <div className="gradient"> </div>
                                <Card.Img variant="top" src={`http://localhost:8000/storage/upload/${props.thumbnail}`}/>
                                <Card.Title class="CatDisplay">{data}</Card.Title>
                                <Card.Title>{props.title}</Card.Title>
                            </div>

                            <Card.Body>
                                <Card.Title class="date">{props.created_at}</Card.Title>
                                <Card.Text>
                                        <p className="Article_title">{props.content.substr(0, 250)}</p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                                    </Link>

            </div>





            {/* {array.map( n => console.log(n.id))} */}
            {/* {data.map( n => console.log(n.id))} */}
        </>
    );
}