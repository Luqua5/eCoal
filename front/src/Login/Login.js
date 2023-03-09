import React from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookies";
// import "./user/Login.css";
// import { Header } from "./header/Header";
export default function Login(props) {


    function loginUser(e){
        e.preventDefault();
        axios.post(`http://localhost:8000/api/login`, {email: document.getElementById("email").value, password: document.getElementById("password").value })
            .then(response => {
            console.log(response);
            props.setCookie("mycookie", { name: response.data.name, token: response.data.access_token }, "/");
            
            })
            .catch(error => {
                // what do we do if there's an error ?
            });
    }

    return (
        <>
            
            <div className="container2 ">
                <article className="card-body">
                    <a
                        href="/Register"
                        className="float-right btn btn-outline-primary"
                    >
                        Sign up
                    </a>
                    <h4 className="card-title mb-4 mt-1">Sign in</h4>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                
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
                        <button  onClick={(e) => loginUser(e)} className="btn-block rounded" type="submit" name="login">
                            Login
                        </button>
                    </form>
                </article>
            </div>
        </>
        // <div>asdasdasdas</div>
    );
}

