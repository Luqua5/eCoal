import "./ArticleDetail.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, useParams, useNavigate, Link } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function ArticleDetail(props) {
    //make a get request to localhost:8000/test with axios
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    // const queryParameters = new URLSearchParams(window.location.search)
    // console.log(window.location.search)
    // console.log (queryParameters.get("id"))
    // let { id } = useParams();
    let params = useParams()

    useEffect(() => {
        getData();
        console.log(data)
    }, []);

    async function getData() {  // The function is asynchronous
        const data = JSON.parse((await axios.get("http://localhost:8000/api/article/" + params.id)).data);
        console.log(data)
        setData(data)
        console.log(data)

    }

    async function remove(){
        await axios.delete("http://localhost:8000/api/article/" + params.id)
        .then(res => {
            console.log(res);
            if (res.status == 200) {
                navigate("/");
            }
        });

        
    }
    return (
        <>
            {/* {console.log(data.content)} */}
            <Header />




            <div>

                {data.length ? <div>
                    <div className="Title">{data[0].title}</div>
                    <div><img className="articleIMG" src={`http://localhost:8000/storage/upload/${data[0].thumbnailURL}`} /></div>
                    <div className="Date-art">03/03/2023 14:22</div>
                    <div className="content">{data[0].content}</div>
                    <div className="btn-container">
                        <Link to={`/EditArticle/${params.id}`}>Edit</Link>
                        <button onClick={remove}>Delete</button>
                    </div>
                </div>

                    : <div>LOADING</div>}
            </div>
            <Footer />
        </>
    );
}