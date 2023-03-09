import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router'
import { useCookies } from "react-cookie";
import Footer from '../components/Footer';
import "../Login/Login.css";

// import { Header } from "../header/Header";
export default function Register( props ) {
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
        // const data = await axios.post(`http://localhost:8000/api/register`,{name: name, email: email, password: password})
        // console.log("=>",data);         
       
        axios.post(`http://localhost:8000/api/register`, { name: name, email: email, password: password })
            .then(response => {
            setError("Account Created");
            console.log(response.data.access_token);
            props.setCookie("mycookie", { name: name, token: response.data.access_token }, "/");
            setNavigate(true)
            })
            .catch(error => {
                // what do we do if there's an error ?
            });
      
        // if(axios.post(`http://localhost:8000/api/register/`, { name: name, password: password, admin: 0 })){
        //                         setError("Account created")
        //                         setNavigate(true)
        //                     }
        // if(data){
        //     setNavigate(true)
        // }


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
                        <div className="form-group">
                            <input type="password" placeholder="Confirm Password" id="confirmPassword" />
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