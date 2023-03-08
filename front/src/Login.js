import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookie";
// import "./user/Login.css";
// import { Header } from "./header/Header";
export default function Login(props) {



    const[cookies,setCookie,removeCookie] = useCookies("td05")
    const [error, setError] = useState('');
    
    async function loginUser(e) {
        // e.preventDefault();
        console.log("registerUser")
        let email = document.getElementById('email').value;
        console.log(email)
        let password = document.getElementById('password').value;
        console.log(password)

    
            const response = (await axios.post(`http://localhost:8000/api/login`,{email: email, password: password}))
            if(response.token === undefined){
                console.log("connection failure")
            }else{
                console.log("signed in")
                alert(response.token);
                props.setCookie("td05",{email:email, token:response.token}, "/" )
                
            }
       
    }

    return (
        <>
            
            <div className="container2 ">
            <article className="card-body">
                    {/* <a href="/user/login" className="float-right btn btn-outline-primary">Sign in</a> */}
                    <h4 className="card-title mb-4 mt-1">Sign up</h4>
                    {/* <div className="register"> */}
                    <h1>Login</h1>
                    <form>
                    <div className="form-group">
                            <label>Email</label>
                            <input type="text" id="email" />
                        </div>
                        
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" />
                        </div>
                    
                        <button onClick={(e) => loginUser(e)}>Login</button>
                        <h3>{error}</h3>
                    </form>
                </article>
            </div>
        </>
        // <div>asdasdasdas</div>
    );
}

