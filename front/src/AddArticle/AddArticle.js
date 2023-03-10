// import "./Home.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./AddArticle.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddArticle(props) {
    
    const [league, setLeague] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState([]);
    const [leagueId, setLeagueId] = useState(-1);
    const [searchValue, setSearchValue] = useState('');
    const [lastArticleId, setLastArticleId] = useState(-1);

    const navigate = useNavigate();




    function selectLeague(x){
        setSearchValue(x.name);
        setLeagueId(x.id);
        setSelectedLeague([]);
    }

    useEffect(() => {

        try{
            axios({
                method: "get",
                url: "http://localhost:8000/api/league",
                headers: {
                    "content-type": "multipart/form-data",
                },
            }).then((response) => {
                
                setLeague(JSON.parse(response.data));
            });
        } catch (error){
            console.log(error);
        }

        try{
            axios({
                method: "get",
                url: "http://localhost:8000/api/article"
            }).then((response) => {
                setLastArticleId(JSON.parse(response.data).length);
            });
        } catch (error){
            console.log(error);
        }
    }, []); 
    
    
    function SearchLeague(e) {
        setSearchValue(e.target.value);
        let searchValue = document.getElementById('searchLeague').value;                
        setSelectedLeague(league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase())));        
        
    }

    async function sendData(){
        try{
            var formData = new FormData();
            formData.append('thumbnailURL', document.getElementsByClassName('thumbnailURL')[0].files[0]);
            formData.append('title', document.getElementsByClassName('title')[0].value);
            formData.append('content', document.getElementsByClassName('content')[0].value);
            formData.append('league_id', leagueId);

            await axios.post('http://localhost:8000/api/article', formData, {
                headers: {
                    'Authorization': 'Bearer ' + props.cookie?.mycookie?.token,
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if(response.status === 200){
                    let lastid = lastArticleId+1
                    navigate('/articleDetail/' + lastid);
                }
            });
        } catch (error){
            console.log(error);
        }
    }

    
    return (
        <>
        <Header/>

        <h2 className="Title  top-padding">Add an article</h2>
                        <Form className="formAdd">
                                        <Form.Control
                                            type="text"
                                            placeholder="Title"
                                            className="title"
                                            aria-label="Title"
                                        />

                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            placeholder="Content"
                                            className="content"
                                            aria-label="Content"
                                        /> 
                                        <label for="thumbnailURL">Chose a thumbnail</label>
                                        <input type="file" id="thumbnailURL" name="thumbnailURL" className="thumbnailURL" /> 
                                    
                        </Form>
                            <Form className="d-flex searchLeague">
                                    <div className="search">

                                        <Form.Control
                                        onChange={SearchLeague}
                                            type="search"
                                            placeholder="Chose a league"
                                            id="searchLeague"
                                            className="me-2"
                                            aria-label="Search"
                                            value={searchValue}
                                        />
                                        
                                    </div>

                                    <div className="dropdown">
                                        <ul id="leagueList">
                                            { searchValue.length >=3 ? selectedLeague.map((x) => ( <li onClick={() => selectLeague(x)} key={x.id}>{x.name}</li>)) : null}
                                        </ul>
                                    </div>
                                        

                            </Form>

                            <button className="publish" onClick={sendData}>   Publish  </button>



<Footer/>

        </>
    );
}