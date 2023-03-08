import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./article/Article";
import ArticleDetail from "./article/ArticleDetail";
import Login from "./Login";

//import use cookie


function App() {
  //make a get request to localhost:8000/test with axios
//const cookie use cookie
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
        <Route exact={true} path="/ArticleDetail/:id" element={<ArticleDetail/>} />
        <Route exact={true} path="/Article" element={<Article/>} />
        <Route exact={true} path="/Login" element={<Login/>} />
      </Routes>

      <footer className="footer"></footer>
    </>
  );
}

export default App;
