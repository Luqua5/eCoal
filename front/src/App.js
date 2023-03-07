import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./article/Article";




function App() {
  //make a get request to localhost:8000/test with axios

  const [nb, setNb ] = useState(0)  

  
//   this.state = {
//     filter: []
// }
  
  // async function getArticles() {  // The function is asynchronous
  //   const articles = (await axios.get('http://localhost:8000/api/test')).data
  //   console.log(articles)
  //   return articles;
  // }

  return (
    <>

      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route exact={true} path="/article" element={<Article/>} />
      </Routes>

      <footer className="footer"></footer>
    </>
  );
}

export default App;
