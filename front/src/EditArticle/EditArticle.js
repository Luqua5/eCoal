// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EditArticle.css";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function EditArticle(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [league, setLeague] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState([]);
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
    }, []); 
    
    
    function SearchLeague() {
        let searchValue = document.getElementById('searchLeague').value;                
        setSelectedLeague(league.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase())));        
        
        console.log(selectedLeague);
    }

    function sendData(){
        try{
            var formData = new FormData();
            formData.append('thumbnailURL', document.getElementsByClassName('thumbnailURL')[0].files[0]);
            formData.append('title', document.getElementsByClassName('title')[0].value);
            formData.append('content', document.getElementsByClassName('content')[0].value);
            formData.append('league_id', selectedLeague[0].id);

            console.log(document.getElementsByClassName('thumbnailURL')[0].value);
            axios.post('http://localhost:8000/api/article/' + params.id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                console.log(response);
                if(response.status === 200){
                    navigate("/articleDetail/" + params.id)
                }
            });
        } catch (error){
            console.log(error);
        }
    }

    return (
        <>

        <Header />
                        <h1 className="Title">Edit Article</h1>
                        <Form className="formAdd">
                                        <Form.Control
                                            type="text"
                                            placeholder="Title"
                                            className="title"
                                            aria-label="Title"
                                        />

                                        <Form.Control
                                            type="textarea"
                                            placeholder="Content"
                                            className="content"
                                            aria-label="Content"
                                        /> 

                                        <input type="file" id="thumbnailURL" name="thumbnailURL" className="thumbnailURL" /> 
                                    
                        </Form>
                            <Form className="search-form">
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
                                                alt="Button image"
                                                src="/image/search.png"
                                            />
                                        </Button>
                            </Form>

                            <button className="publish" onClick={sendData}>   Publish  </button>



<Footer/>

        </>
    );
}