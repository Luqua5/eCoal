import React from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookies";
// import "./user/Login.css";
// import { Header } from "./header/Header";
export default function Login(props) {
    return (
        <>
            
            <div className="container2 ">
                <article className="card-body">
                    <a
                        href="/user/register"
                        className="float-right btn btn-outline-primary"
                    >
                        Sign up
                    </a>
                    <h4 className="card-title mb-4 mt-1">Sign in</h4>
                    <form onSubmit={props.onSignin}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                id="username"
                                autoComplete="off"
                                ref={props.usernameRef}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                ref={props.passwordRef}
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
                    </form>
                </article>
            </div>
        </>
        // <div>asdasdasdas</div>
    );
}