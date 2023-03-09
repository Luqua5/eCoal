import React from "react";
import axios from "axios";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookies";
import "./Login.css";
// import { Header } from "./header/Header";
export default function Login(props) {


    function loginUser(e) {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', { email: document.getElementById('email').value, password: document.getElementById('password').value })
            .then((response) => {
                console.log(response)
                props.setCookie('mycookie', { name: response.data.name, token: response.data.access_token }, '/');

            }).catch(error => {
                //what do we do if there is an error?
            })
    }
    return (
        <>

            <div className="container2 ">
                <img className="login-img" src="/image/logo_txt.png" />
                <article className="card-body">
                    
                    <h4 className=" Title">Sign in</h4>
                
                        
                    <form className="login-form" onSubmit={(e) => loginUser(e)}>
                        <div className="form-group">
                            
                            <input
                                type="text"
                                id="email"
                                name="email"
                                autoComplete="off"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    {" "}
                                    <input type="checkbox" /> Save password
                                </label>
                            </div>
                        </div>
                        <button className="btn-block rounded" type="submit" name="login">
                            Login
                        </button>
                        
                        <a
                            href="/Register"
                            className="float-right btn btn-outline-primary btn-signup"
                        >
                            Sign up
                        </a>
                        
                    </form>
                </article>
            </div>
            <Footer />
        </>
        // <div>asdasdasdas</div>
    );
}

function signup() {

}