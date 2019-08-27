import React,{useEffect, useState} from 'react';
import io from "socket.io-client";
import { Button, Jumbotron, Navbar } from "reactstrap";
import Image from "../rpg/banner6.jpg"
import "../styles/banner.css";


export default function Banner(){

    const [ component, setComponent ] = useState("buttons");

    function changeComponent(obj){
        setComponent(obj)
    }

    function Buttons(){
        return (
            <div>
            <h2>Cadastre-se Na Maior Rede Social de RPG</h2>
             <p>Todos seus dados estão altamente protegidos, divirta-se encontrando uma mesa para jogar!</p>
                <div className="buttons">
                    <button class="btn entrar"  onClick={()=>changeComponent("entrar")}>ENTRAR</button>
                    <Button className="btn btn-success" onClick={()=>changeComponent("cadastro")}>CADASTRE-SE</Button>
                </div>
            </div>    
        );
    }

    function Form(){
        return (
            <div class="card text formCard">
                <div class="card-header bg-success  text-light">
                    <a onClick={()=>changeComponent("buttons")} href="#"> <p>Voltar</p> </a>
                    
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="nick">NickName</label>
                                    <input type="text" class="form-control" id="nick" placeholder="NickName"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="pass">Password</label>
                                    <input type="password" class="form-control" id="pass" placeholder="Password"/>
                                </div>  
                            </div>
                            <div class="col-sm-6">
                                <label for="pass">Joga de que?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="">
                                        Player
                                    </label>
                                    </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                        Mestre
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">UF</label>
                                    <select class="custom-select custom-select-lg">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">  
                            <label for="exampleInputEmail1">Cidade</label>
                                <select class="custom-select custom-select-lg">
                                    <option value="1" selected>One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>    
                            <div class="col-sm-12"> 
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Descrição breve sobre você como jogador</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary" >Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    function Entrar(){
      return(
        <div class="card text entrarCard">
            
            <div class="card-header bg-success  text-light headerCard">
                <a onClick={()=>changeComponent("buttons")} href="#"> <p>Voltar</p> </a>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div class="col-sm">
                            <button class="btn btn-primary" >Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      );
    }

    return(
           <div class="header">
                <div class="shadow"></div>
                <img src={Image}/>
                <div className="infoBanner">
                    {
                     component === "entrar" && (<Entrar/>)
                    } 
                    {
                        component === "cadastro" && (<Form/>)
                    }
                    {
                        component === "buttons" && (<Buttons/>)
                    }
                </div>
           </div>
    );
}



