import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router'
import { useCookies } from "react-cookie";

// import { Header } from "../header/Header";
export default function Register( setCookie ) {
    const [error, setError] = useState('');
    const[navigate, setNavigate] = useState(false)

    
    async function registerUser(e) {
        e.preventDefault();
        let email = document.getElementById('email').value;
        console.log(email)
        let name = document.getElementById('name').value;
        console.log(name)
        let password = document.getElementById('password').value;
        console.log(password)
        let confirmPassword = document.getElementById('confirmPassword').value;

        // await axios.post(`http://localhost:8000/api/register`,{name: name, email: email, password: password})
        //     .then(res => {
        //         if (res.data.length === 0) {
        //             setError("Account created")
        //             // if (password === confirmPassword) {
        //             //     if(axios.post(`http://localhost:8000/user/register/`, { name: name, password: password, admin: 0 })){
        //             //         setError("Account created")
        //             //         setNavigate(true)
        //             //     }
        //             // } else {
        //             //     setError("Password are not the same")
        //             // }
        //         } else{
        //             setError("Creation failed")
        //         }
        //     });
        axios.post(`http://localhost:8000/api/register`, { name: name, email: email, password: password })
            .then(response => {
            setError("Account Created");
            console.log(response.data.access_token);
            setCookie("mycookie", { name: name, token: response.data.access_token }, "/");
            
            })
            .catch(error => {
                // what do we do if there's an error ?
            });
      
        // if(axios.post(`http://localhost:8000/api/register/`, { name: name, password: password, admin: 0 })){
        //                         setError("Account created")
        //                         setNavigate(true)
        //                     }


    }


    return (
        <><div className="container2">
            {navigate ? (<Navigate to={"/Login"}/>) : null}
            <div className="card">
                <article className="card-body">
                    <a href="Login" className="float-right btn btn-outline-primary">Sign in</a>
                    <h4 className="card-title mb-4 mt-1">Sign up</h4>
                    {/* <div className="register"> */}
                    <h1>Register</h1>
                    <form>
                    <div className="form-group">
                            <label>Email</label>
                            <input type="text" id="email" />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input type="password" id="confirmPassword" />
                        </div>
                        <button onClick={(e) => registerUser(e)}>Register</button>
                        <h3>{error}</h3>
                    </form>
                </article>
            </div></div></>
    )
}