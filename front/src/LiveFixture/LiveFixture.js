import "./LiveFixture.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Article from "../article/Article";



export default function LiveFixture() {

    
    
    return (
        <>
            <Header/>
            <div id="wg-api-football-games"
                data-host="api-football-v1.p.rapidapi.com"
                data-key="ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb"
                data-date=""
                data-league=""
                data-season=""
                data-theme=""
                data-refresh="15"
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
            </div>
            
            <Footer/>

        </>
    );
}

