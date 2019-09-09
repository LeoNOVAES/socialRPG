import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuth } from "./auth";

import Login from "./pages/Login";
import Home from "./pages/Home";



export default function Routes(){
    return(
        <BrowserRouter>
                <Route path="/"  exact component={Login}/>
                <Route path="/home" exact component={Home} />
        </BrowserRouter>
    );
}