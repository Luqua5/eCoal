// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";



import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import MatchDetail from "./MatchDetail";




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Match() {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([]);

    useEffect(() => {
        getFixture();
    }, []);


    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { date: '2022-12-29' },
        headers: {
            'X-RapidAPI-Key': 'ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };


    async function getFixture() {
        axios.request(options).then(function (response) {
            //   console.log(response.data);
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });
    }




    return (
        <>
            <div>
                {console.log(data)}
                {data.length ? data.map(n => <MatchDetail
                    away={n.teams.away.name}
                    home={n.teams.home.name}
                    goalsHome={n.goals.home}
                    goalsAway={n.goals.away}
                    logoAway={n.teams.away.logo}
                    logoHome={n.teams.home.logo} ></MatchDetail>) : <div>LOADING</div>}
            </div>

        </>
    );
}