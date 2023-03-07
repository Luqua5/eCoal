// import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Route, Link, Routes, useNavigate } from "react-router-dom";

export default function Home() {
    //make a get request to localhost:8000/test with axios
  
    // const [nb, setNb ] = useState(0)  
  
   async function getArticles() {  // The function is asynchronous
    const articles = (await axios.get('http://localhost:8000/api/test')).data
    console.log(articles)
    return articles;
  }
    return (
      <>
  
        <div>
            {getArticles()}
            HoMEMEME

        </div>
      </>
    );
  }