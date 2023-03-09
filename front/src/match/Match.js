// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


import Dropdown from 'react-bootstrap/Dropdown';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Header from '../components/Header';

import MatchDetail from "./MatchDetail";




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Match() {
    //make a get request to localhost:8000/test with axios

    const [data, setData] = useState([...new Set]);
    const [league, setLeague] = useState([]);
    const [season, setSeason] = useState([...new Set]);
    const [selectedData, setSelectedData] = useState([]);

    useEffect(() => {
        getFixture2022();
        getFixture2021();
        console.log("test")
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
    const options2 = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: { date: '2021-12-29' },
        headers: {
            'X-RapidAPI-Key': 'ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    // const options = {
    //     method: 'GET',
    //     url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    //     params: {league: '39', season: '2022', from: '2021-01-01', to: '2022-04-07'},
    //     headers: {
    //       'X-RapidAPI-Key': 'ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb',
    //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    //     }
    //   };




    async function getFixture2022() {
        axios.request(options).then(function (response) {
            //   console.log(response.data);
            setData(response.data.response)
            setSelectedData(response.data.response)
            // setLeague(response.data.league.name)
            const leagues = [...new Set(response.data.response.map(data=> data.league.name))]; // Get unique genders from the data
            setLeague(leagues)
            const seasons = [...new Set(response.data.response.map(data=> (data.league.season)))]; // Get unique genders from the data
            // console.log(seasons)
            setSeason(seasons)
            

        }).catch(function (error) {
            console.error(error);
        });
    }

    async function getFixture2021() {
        axios.request(options2).then(function (response) {
            //   console.log(response.data);
            setData(data.concat(response.data.response))
            setSelectedData(data.concat(response.data.response))

            // setLeague(response.data.league.name)
            const leagues = [...new Set(response.data.response.map(data=> data.league.name))]; // Get unique genders from the data
            setLeague(league.concat(leagues))
            const seasons = [...new Set(response.data.response.map(data=> (data.league.season)))]; // Get unique genders from the data
            // console.log(season)
            // console.log(seasons)
            setSeason(season.concat(seasons))

        }).catch(function (error) {
            console.error(error);
        });
    }


    // async function SearchMatchByLeague(n) {
    //     // let teamId = document.getElementById('searchLeague').value;
    //     console.log("activated")
    //     let newArray = data.filter(x => x.league_id === n);
    //     console.log(newArray)
    //     setSelectedData(newArray)


    //     setSelectedData(selectedData.filter(x => x.league_id === selectedID));  

    //     console.log(newArray)
    //     setSelectedLeague(league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase())));

    // }


    return (
        <>
        {console.log(selectedData)}
        {console.log(season)}
        <Header></Header>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {season.length ? season.map(n => <Dropdown.Item key={n}>{n} </Dropdown.Item>) : <div>LOADING</div>}
      {/* <Dropdown.Item key="1">2021 </Dropdown.Item>
      <Dropdown.Item key="2">2022 </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {league.length ? league.map(n => <Dropdown.Item key={n}>{n} </Dropdown.Item>) : <div>LOADING</div>}
      {/* <Dropdown.Item key="1">2021 </Dropdown.Item>
      <Dropdown.Item key="2">2022 </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    

            <div>
                
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