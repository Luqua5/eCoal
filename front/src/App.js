import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./article/Article";
import ArticleDetail from "./article/ArticleDetail";
import LiveFixture from './LiveFixture/LiveFixture';
import Login from "./Login/Login";
import Register from "./user/Register";
import User from "./user/User";
import {useCookies} from "react-cookie"

//import use cookie


function App() {
  //make a get request to localhost:8000/test with axios
//const cookie use cookie
  const [nb, setNb ] = useState(0)  
  const[cookies,setCookie,removeCookie]= useCookies("mycookie")

  


  return (
    <>

      <Routes>
        <Route exact={true} path="/" element={<Home cookie={cookies} removeCookie={removeCookie}/>} />
        <Route exact={true} path="/ArticleDetail/:id" element={<ArticleDetail/>} />
        <Route exact={true} path="/Article" element={<Article/>} />
        <Route exact={true} path="/Login" element={<Login setCookie={setCookie}/>} />
        <Route exact={true} path="/Register" element={<Register setCookie={setCookie}/>} />
        <Route exact={true} path="/LiveFixture" element={<LiveFixture/>} />
        <Route exact={true} path="/User" element={<User cookie={cookies}/>} />
      </Routes>

      <footer className="footer"></footer>
    </>
  );
}

export default App;
