import React,{useEffect, useState} from 'react';
import io from "socket.io-client";
import dom from "react-dom";
import { Button, Jumbotron } from "reactstrap";
import Banner from "../components/Banner"

export default function Login(){
    return(
        <div>
            <Banner />
        </div>
    );
}

