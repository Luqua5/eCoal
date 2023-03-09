import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "../article/Article";
import Header from '../components/Header';
import Footer from '../components/Footer';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home(props) {
    //make a get request to localhost:8000/test with axios

  const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

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
        setSelectedData(articles)
    setSelectedData(articles)
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


    function SearchFilter() {
        let searchValue = document.getElementById('search').value;
        console.log(searchValue)
        //    console.log(data.filter(article => article.title.includes("ecoal")))
        // const [searchTerm, setSearchTerm] = useState("");
        // console.log("HALOO" + data.filter(article => article.title.toUpperCase().includes("TEST")))
        let newArray = data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase()));
        console.log(newArray)
        setSelectedData(data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase())));


    }




  function SearchFilter(){
   let searchValue = document.getElementById('search').value;
   console.log(searchValue)
//    console.log(data.filter(article => article.title.includes("ecoal")))
    // const [searchTerm, setSearchTerm] = useState("");
    // console.log("HALOO" + data.filter(article => article.title.toUpperCase().includes("TEST")))
     let newArray = data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase()));
     console.log(newArray)
    setSelectedData(data.filter(article => article.title.toUpperCase().includes(searchValue.toUpperCase())));
    
    
    }



    return (
        <>
            {console.log(selectedData)}
            <div>
                <Header />

                {selectedData.length ? selectedData.map(n => <Article key={n.id} id={n.id} title={n.title} content={n.content} thumbnail={n.thumbnail}></Article>) : <div>LOADING</div>}

                <Footer />
                {/* <Navbar bg="light" fixed="bottom" className="bottomNavbar">
          
                <Nav.Link href="/"> <img className="homeIcon icon" src={home}/> </Nav.Link>
                <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src={streaming}/> </Nav.Link>
                <Nav.Link href="/User"> <img className="homeProfil icon" src={profil}/> </Nav.Link>
                <button onClick={logout}>Logout</button>

          
        </Navbar> */}

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