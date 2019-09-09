import React,{useEffect, useState} from 'react';
import io from "socket.io-client";
import { Button, Jumbotron, Navbar } from "reactstrap";
import Image from "../rpg/banner6.jpg"
import "../styles/banner.css";
import api from "../services/api";
import Form from "../components/FormCadastro";
import Enter from "../components/Enter";

export default function Banner({ history }){

    const [component, setComponent] = useState("buttons");

    function changeComponent(obj){
        setComponent(obj)
    }
   
    function Buttons(){
        return (
            <div>
            <h2>Cadastre-se Na Maior Rede Social de RPG</h2>
             <p>Todos seus dados estão altamente protegidos, divirta-se encontrando uma mesa para jogar!</p>
                <div className="buttons">
                    <button className="btn entrar"  onClick={()=>changeComponent("entrar")}>ENTRAR</button>
                    <Button className="btn btn-success" onClick={()=>changeComponent("cadastro")}>CADASTRE-SE</Button>
                </div>
            </div>    
        );
    }

    return(
           <div className="header">
                <div className="shadow"></div>
                <img src={Image}/>
                <div className="infoBanner">
                    {
                     component === "entrar" && ( <Enter history={history} /> )
                    } 
                    {
                        component === "cadastro" && (<Form />)
                    }
                    {
                        component === "buttons" && (<Buttons/>)
                    }
                </div>
           </div>
    );
}



