import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";

import { useNavigate } from "react-router-dom";

export default function User(props) {

    
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);

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




    return (
        <>
            <div className="user">
              {props.cookie?.mycookie?.name}
            </div>
        </>
    );
}
