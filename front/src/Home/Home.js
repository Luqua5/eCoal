import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "../article/Article";
import Header from './Header';

import home from "../image/home.png";
import streaming from "../image/streaming.png";
import profil from "../image/profil.png";




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home(props) {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);

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

    return (
        <>
            {/* {console.log(data)} */}
            <div>

                <Header />

                {data.length ? data.map(n => <Article key={n.id} title={n.title} content={n.content} thumbnail={n.thumbnail}></Article>) : <div>LOADING</div>}

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
