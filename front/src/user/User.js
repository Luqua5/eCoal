import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";

import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function User(props) {

    
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState([]);


    console.log(props);
    useEffect(() => {
        try{
            axios({
                method: "get",
                url: "http://localhost:8000/api/user",
                headers: {
                  Authorization: "Bearer " + props.cookie.mycookie.token,
                  "Content-Type": "application/json",
                },
              }).then((response) => {
                console.log(response);
                setUser(response.data);
                console.log(user);
              });
        } catch (error){
            console.log(error);
            setRedirect(true);
        }
    }, []); 

    if (redirect) {
        navigate("/Login");
        return null;
    }

    async function logout() {

      axios({
          method: 'get',
          url: 'http://localhost:8000/api/logout',
          headers: {
              'Authorization': 'Bearer ' + props.cookie?.mycookie?.token,
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          console.log(response)
          navigate("/Login");
      });
      props.removeCookie("mycookie")

  }


    return (
        <>
            <Header/>
            <div className="user">
              <p> Your name : {props.cookie?.mycookie?.name} </p>
              <p> Your email address : {user.email} </p>
              <p> Your password : ******** </p>
                <Link className="linkAdd" to="/addArticle">Add article</Link>
              <button className="logout" onClick={logout}>Logout</button>
            </div>
            <Footer/>
        </>
    );
}
