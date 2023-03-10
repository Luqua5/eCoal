import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from 'react-router'
import { useCookies } from "react-cookie";
import Footer from '../components/Footer';
import "../Login/Login.css";

// import { Header } from "../header/Header";
export default function Register( props ) {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    async function registerUser(e) {
        e.preventDefault();
        let email = document.getElementById('email').value;
        console.log(email)
        let name = document.getElementById('name').value;
        console.log(name)
        let password = document.getElementById('password').value;
        console.log(password)

               
       
        axios.post(`http://localhost:8000/api/register`, { name: name, email: email, password: password })
            .then(response => {
                setError("Account Created");
                props.setCookie("mycookie", { name: name, token: response.data.access_token }, "/");
                navigate("/");
            })
            .catch(error => {
                // what do we do if there's an error ?
            });


    }


    return (
        <><div className="container2">
            <img className="login-img" src="/image/logo_txt.png" />
            {navigate ? (<Navigate to={"/Login"}/>) : null}
            <div className="card">
                <article className="card-body">
                    
                    {/* <div className="register"> */}
                    <h1 className="Title">Register</h1>
                    <form className="login-form">
                    <div className="form-group">
                            <input type="text" placeholder="email" id="email" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text" placeholder="Username" id="name" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" id="password" />
                        </div>
                        <button className="register" onClick={(e) => registerUser(e)}>Register</button>
                        <h3>{error}</h3>
                    </form>
                </article>
            </div></div>
            <Footer />
            </>
    )
}